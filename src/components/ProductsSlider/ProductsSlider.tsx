import React, { useEffect, useRef, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import ArrowLeftDisabled from '../../images/icons/arrow_left_disabled.svg';
import '../../styles/productsSlider.scss';
import { Phones } from '../../types/Phones';
import { ProductCard } from '../ProductCard/ProductCard';
import classNames from 'classnames';

// const gap = 16;

// type HotPrice = {
//   productsData: Phones[],
//   title: string,
// };

// export const ProductsSlider: React.FC<HotPrice> = ({ title, productsData }) => {
//   const currentSlider = useRef<HTMLDivElement>(null)

//   const [isSlider] = useState(true);

//   const [isPrevDisabled, setIsPrevDisabled] = useState(true);
//   const [isNextDisabled, setIsNextDisabled] = useState(false);

//   const getScrollValue = () => {
//     const card = document.querySelector('.card');
//     const windowWidth = useWindowSize();

//     const cardWidth = (card?.getBoundingClientRect().width ?? 0);

//     if (windowWidth.width >= 1161) {
//       return cardWidth * 4 + gap * 4;
//     }

//     if (windowWidth.width >= 870 && windowWidth.width <= 1160) {
//       return Math.round((cardWidth * 3 + gap * 3) * 10) / 10;
//     }

//     if (windowWidth.width <= 869 && windowWidth.width > 580) {
//       return cardWidth * 2 + gap * 2
//     }

//     return 0;
//   };

//   const handlePrevBtn = (slide: HTMLDataElement | null) => {
//     if (!slide) {
//       return;
//     }

//     slide.scrollBy({
//       left: getScrollValue() * -1,
//       behavior: 'smooth',
//     });
//   };

//   const handleNextBtn = (slide: HTMLDataElement | null) => {
//     if (!slide) {
//       return;
//     }

//     slide.scrollBy({
//       left: getScrollValue(),
//       behavior: 'smooth',
//     });
//   }

//   return (
//     <div className='productsSlider'>
//       <div className='productsSlider__titleContainer'>
//         <h1 className='productsSlider__title'>{title}</h1>
//         <div className='productsSlider__btnContainer'>
//           <div className='sliderBtn' onClick={() => handlePrevBtn}>
//             <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left' />
//           </div>

//           <div className='sliderBtn' onClick={() => handleNextBtn}>
//             <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
//           </div>
//         </div>
//       </div>
//       <div
//         className='productsSlider__cardContainer'
//       // style={{ gap: `calc(${cardWidth} * ${hotPriceProducts.length})` }}
//       >
//         {productsData.map(product => (
//           <ProductCard
//             key={product.id}
//             productData={product}
//             priceToken={product.price}
//           />
//         ))}
//       </div>




//     </div>
//   )
// }

// type Props = {
//   productsData: Phones[],
//   title: string,
// }
// enum CategoryWidth {
//   desc = 1040,
//   tablet = 600,
// }

// type SliderSize = {
//   slider: number,
//   element: number,
//   interval: number,
// }

// export const ProductsSlider: React.FC<Props> = ({ productsData, title }) => {

//   const [position, setPosition] = useState(0);
//   const [areButtonDisabled, setAreButtonDisabled] = useState(false);
//   const windowWidth = useWindowSize();

//   const widthElement = 272;
//   const widthInterval = 16;
//   const widthSlider = CategoryWidth.desc + 96;


//   const blockLength = (productsData.length * widthElement + widthInterval * (productsData.length - 1));
//   const start = 0;
//   const end = widthSlider - blockLength;
//   const isNextDisabled = () => {
//     return position === end;
//   };
//   const isPrevDisabled = () => {
//     return position === start;
//   };

//   const handlePrevBtn = () => {
//     setAreButtonDisabled(true);
//     if (-position <= widthSlider) {
//       setPosition(start);
//     } else {
//       setPosition(cur => cur + widthSlider + widthInterval);
//     }
//   };

//   const handleNextBtn = () => {
//     setAreButtonDisabled(true);
//     if (blockLength + position - widthSlider <= widthSlider) {
//       setPosition(end)
//     } else {
//       setPosition(cur => cur - widthSlider - widthInterval);
//     }
//   };

//   const sliderStyles = {
//     transform: `translate(${position}px)`,
//   };

//   return (
//     <div className='productsSlider'>
//       <div className='productsSlider__titleContainer'>
//         <h1 className='productsSlider__title'>{title}</h1>
//         <div className='productsSlider__btnContainer'>
//           <div className='sliderBtn'
//             onClick={handlePrevBtn}
//             aria-disabled={areButtonDisabled}
//           >
//             <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left'
//             />
//           </div>

//           <div className='sliderBtn' onClick={() => handleNextBtn}>
//             <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
//           </div>
//         </div>
//       </div>
//       <div
//         className='productsSlider__cardContainer'
//       // style={{ gap: `calc(${cardWidth} * ${hotPriceProducts.length})` }}
//       >
//         {productsData.map(product => (
//           <ProductCard
//             key={product.id}
//             productData={product}
//             priceToken={product.price}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }


// Third try

type Props = {
  productsData: Phones[],
  title: string,
}

export const ProductsSlider: React.FC<Props> = ({ productsData, title }) => {
  const [position, setPosition] = useState(0);
  const [itemsInSlider, setItemsInSlider] = useState(4);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  const windowWidth = useWindowSize();

  const sliderSettings = {
    step: 1,
    itemWidth: 288,
    itemsOnPage: itemsInSlider,
    animationDuration: 500,
    infinity: false,
  };

  const {
    step,
    itemWidth,
    itemsOnPage,
    animationDuration,
    infinity,
  } = sliderSettings;

  const disablePrevButton = (position <= 0) && !infinity;
  const disableNextButton = (position >= productsData.length - itemsOnPage) && !infinity;

  const slideLimit = -((productsData.length * itemWidth) - (itemWidth * itemsOnPage));

  const transformOptions = (position * itemWidth) >= slideLimit
    ? (position * itemWidth)
    : slideLimit;

  useEffect(() => {
    sliderWidth()
  }, [windowWidth.width]);

  useEffect(() => {
    setPosition(0);
  }, []);

  const handlePrevBtn = () => {
    if (position - step >= 0) {
      setPosition(position - step);
    } else {
      setPosition(productsData.length + 1 - itemsOnPage - step);
    }
  };

  const handleNextBtn = () => {
    if ((position + step) < productsData.length + 1 - itemsOnPage) {
      setPosition(position + step);
    } else {
      setPosition(0);
    }
  };

  const sliderWidth = () => {
    if (windowWidth.width > 1175) {
      if (productsData.length < 4) {
        setItemsInSlider(productsData.length);
      } else {
        setItemsInSlider(4);
      }
    }

    if (windowWidth.width > 887 && windowWidth.width < 1176) {
      if (productsData.length < 3) {
        setItemsInSlider(productsData.length)
      } else {
        setItemsInSlider(3)
      }
    }

    if (windowWidth.width > 599 && windowWidth.width < 888) {
      if (productsData.length < 2) {
        setItemsInSlider(productsData.length)
      } else {
        setItemsInSlider(2);
      }
    }

    if (windowWidth.width < 599) {
      setItemsInSlider(1);
    }
  };

  // Slider tuch

  // Slider time

  return (
    <div className='productsSlider'>
      <div className='productsSlider__titleContainer'>
        <h1 className='productsSlider__title'>{title}</h1>
        <div className='productsSlider__btnContainer'>
          <button
            type='button'
            onClick={handlePrevBtn}
            disabled={disablePrevButton}
            className={classNames(
              'sliderBtn', { 'sliderBtn__disabled': disablePrevButton }

            )}
          >
            {!disablePrevButton && (
              <img
                src={ArrowRight}
                alt="arrow left"
                className='sliderBtn__img--left'
              />
            )}

            {disablePrevButton && (
              <img
                src={ArrowLeftDisabled}
                alt="arrow left"
                className='sliderBtn__img'
              />
            )}
          </button>

          <button
            type='button'
            disabled={disableNextButton}
            onClick={handleNextBtn}
            className={classNames(
              'sliderBtn', { 'sliderBtn__disabled': disableNextButton }
            )}
          >
            {!disableNextButton && (
              <img
                src={ArrowRight}
                alt="arrow right"
                className='sliderBtn__img'
              />
            )}

            {disableNextButton && (
              <img
                src={ArrowLeftDisabled}
                alt="arrow right"
                className='sliderBtn__img--right'
              />
            )}

          </button>
        </div>
      </div>

      <div className='productsSlider__body' style={{ maxWidth: `${itemsOnPage * itemWidth}px` }}>
        <div
          className='productsSlider__cardContainer'
          style={{
            transform: `translateX(-${transformOptions}px)`,
            transition: `${animationDuration}ms`,
          }}
        >
          {productsData.map(product => (
            <ProductCard
              key={product.id}
              productData={product}
              priceToken={product.price}
            />
          ))}
        </div>
      </div>

    </div>
  )
}

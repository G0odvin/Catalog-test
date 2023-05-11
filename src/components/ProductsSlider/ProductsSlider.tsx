import React, { useRef, useState } from 'react'
import { useWindowSize } from '../../hooks/useWindowSize';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import '../../styles/productsSlider.scss';
import { Phones } from '../../types/Phones';
import { ProductCard } from '../ProductCard/ProductCard';

const gap = 16;

type HotPrice = {
  productsData: Phones[],
  title: string,
};

export const ProductsSlider: React.FC<HotPrice> = ({ title, productsData }) => {
  const currentSlider = useRef<HTMLDivElement>(null)

  const [isSlider] = useState(true);

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  const getScrollValue = () => {
    const card = document.querySelector('.card');
    const windowWidth = useWindowSize();

    const cardWidth = (card?.getBoundingClientRect().width ?? 0);

    if (windowWidth.width >= 1161) {
      return cardWidth * 4 + gap * 4;
    }

    if (windowWidth.width >= 870 && windowWidth.width <= 1160) {
      return Math.round((cardWidth * 3 + gap * 3) * 10) / 10;
    }

    if (windowWidth.width <= 869 && windowWidth.width > 580) {
      return cardWidth * 2 + gap * 2
    }

    return 0;
  };

  const handlePrevBtn = (slide: HTMLDataElement | null) => {
    if (!slide) {
      return;
    }

    slide.scrollBy({
      left: getScrollValue() * -1,
      behavior: 'smooth',
    });
  };

  const handleNextBtn = (slide: HTMLDataElement | null) => {
    if (!slide) {
      return;
    }

    slide.scrollBy({
      left: getScrollValue(),
      behavior: 'smooth',
    });
  }

  return (
    <div className='productsSlider'>
      <div className='productsSlider__titleContainer'>
        <h1 className='productsSlider__title'>{title}</h1>
        <div className='productsSlider__btnContainer'>
          <div className='sliderBtn' onClick={() => handlePrevBtn}>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left' />
          </div>

          <div className='sliderBtn' onClick={() => handleNextBtn}>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
          </div>
        </div>
      </div>
      <div
        className='productsSlider__cardContainer'
      // style={{ gap: `calc(${cardWidth} * ${hotPriceProducts.length})` }}
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
  )
}

import React, { useEffect, useState } from 'react';
import '../../styles/hotPrices.scss';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import { ProductCard } from '../ProductCard/ProductCard';
import { Phones } from '../../types/Phones';
import { useWindowSize } from '../../hooks/useWindowSize';

type HotPrice = {
  hotPriceProducts: Phones[],
};

export const HotPrices: React.FC<HotPrice> = ({ hotPriceProducts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const screenWidth = useWindowSize();

  const handleResize = () => {
    if (screenWidth.width < 600) {
      setCardsToShow(1);
    } else if (screenWidth.width < 1120) {
      setCardsToShow(2);
    } else {
      setCardsToShow(4);
    }
  };

  const prevBtn = () => {
    const index = currentIndex > 0 ? currentIndex - 1 : hotPriceProducts.length - 1;
    setCurrentIndex(index);
  };

  const nextBtn = () => {
    const index = currentIndex < hotPriceProducts.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  const cardWidth = `${100 / cardsToShow}%`;

  useEffect(() => {
    handleResize();
  }, [])

  return (
    <div className='hotPrices'>
      <div className='hotPrices__titleContainer'>
        <h1 className='hotPrices__title'>Hot prices</h1>
        <div className='hotPrices__btnContainer'>
          <div className='sliderBtn' onClick={() => prevBtn}>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left' />
          </div>

          <div className='sliderBtn' onClick={() => nextBtn}>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
          </div>
        </div>

      </div>

      <div
        className='hotPrices__cardContainer'
        // style={{ gap: `calc(${cardWidth} * ${hotPriceProducts.length})` }}
      >
        {hotPriceProducts.map((product, index) => (
          <div
            key={product.id}
            className={`slider-card ${
              index === currentIndex ? "active" : ""
            }`}
            style={{ flex: `0 0 ${cardWidth}` }}
          >
            <ProductCard

              productData={product}
              priceToken={product.price}
            />
          </div>

        ))}

      </div>
    </div>
  )
}

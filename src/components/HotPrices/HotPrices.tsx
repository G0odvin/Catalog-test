import React from 'react';
import '../../styles/hotPrices.scss';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import { ProductCard } from '../ProductCard/ProductCard';

export const HotPrices = () => {
  return (
    <div className='hotPrices'>
      <div className='hotPrices__titleContainer'>
        <h1 className='hotPrices__title'>Hot prices</h1>
        <div className='hotPrices__btnContainer'>
          <div className='sliderBtn'>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left' />
          </div>

          <div className='sliderBtn'>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
          </div>
        </div>

      </div>

      <div className='hotPrices__cardContainer'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    </div>
  )
}

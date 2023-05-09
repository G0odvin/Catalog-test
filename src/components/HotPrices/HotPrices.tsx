import React from 'react';
import '../../styles/hotPrices.scss';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import { ProductCard } from '../ProductCard/ProductCard';
import { Phones } from '../../types/Phones';

type HotPrice = {
  hotPriceProducts: Phones[],
}


export const HotPrices: React.FC<HotPrice> = ({ hotPriceProducts }) => {
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
        {hotPriceProducts.map(product => (
          <ProductCard
            key={product.id}
            productData = {product}
            priceToken = {product.price}
          />
        ))}

      </div>
    </div>
  )
}

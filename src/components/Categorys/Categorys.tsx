import React from 'react';
import '../../styles/categorys.scss';
import '../../styles/grid.scss';
import CategorysImg1 from '../../images/category/image 1.png';
import CategorysImg2 from '../../images/category/image 2.png';
import CategorysImg3 from '../../images/category/image 3.png';
import { Phones } from '../../types/Phones';

type Props = {
  productsData: Phones[],
}

export const Categorys: React.FC<Props> = ({ productsData }) => {
  const mobilePhones = productsData.filter(product => product.category === 'phones');
  const countMobilePhones = mobilePhones.length;
  const tablets = productsData.filter(product => product.category === 'tablets');
  const countTablets = tablets.length;
  const accessories = productsData.filter(product => product.category === 'accessories');
  const countAccessories = accessories.length;


  return (
    <div className='categorys'>
      <h1 className='categorys__title'>Shop by category</h1>

      <div className='grid'>

        <div className='categorys__content grid__item grid__item--tablet-1-2 grid__item--desktop-1-8'>

          <img src={CategorysImg1} alt="category image photo" className='categorys__content__img' />

          <h2 className='categorys__content__title'>Mobile phones</h2>
          <p className='categorys__content__description'>{`${countMobilePhones} models`}</p>
        </div>

        <div className='categorys__content grid__item--tablet-3-4 grid__item--desktop-9-16'>

          <img src={CategorysImg2} alt="category image photo" className='categorys__content__img categorys__content__img--tablets' />

          <h2 className='categorys__content__title'>Tablets</h2>
          <p className='categorys__content__description'>{`${countTablets} models`}</p>
        </div>

        <div className='categorys__content grid__item--tablet-5-6 grid__item--desktop-17-24'>

          <img src={CategorysImg3} alt="category image photo" className='categorys__content__img categorys__content__img--accessories' />

          <h2 className='categorys__content__title'>Accessories</h2>
          <p className='categorys__content__description'>{`${countAccessories} models`}</p>
        </div>

      </div>

    </div>

  )
}

import React from 'react';
import '../../styles/categorys.scss';
import CategorysImg1 from '../../images/category/image 1.png';
import CategorysImg2 from '../../images/category/image 2.png';
import CategorysImg3 from '../../images/category/image 3.png';

export const Categorys = () => {
  return (
    <div className='categorys'>
      <h1 className='categorys__title'>Shop by category</h1>
      <div className='categorys__contentContainer'>
        <div className='categorys__content'>
          <div className='categorys__content__imgContainer'>
            <img src={CategorysImg1} alt="category image photo" className='categorys__content__img'/>
          </div>
          <h2 className='categorys__content__title'>Mobile phones</h2>
          <p className='categorys__content__description'>95 models</p>
        </div>

        <div className='categorys__content'>
          <div className='categorys__content__imgContainer--tablets categorys__content__imgContainer'>
            <img src={CategorysImg2} alt="category image photo" className='categorys__content__img'/>
          </div>
          <h2 className='categorys__content__title'>Tablets</h2>
          <p className='categorys__content__description'>24 models</p>
        </div>

        <div className='categorys__content'>
          <div className='categorys__content__imgContainer--accessories categorys__content__imgContainer'>
            <img src={CategorysImg3} alt="category image photo" className='categorys__content__img'/>
          </div>
          <h2 className='categorys__content__title'>Accessories</h2>
          <p className='categorys__content__description'>100 models</p>
        </div>

      </div>
    </div>

  )
}

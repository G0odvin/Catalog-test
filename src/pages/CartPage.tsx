import React from 'react';
import '../styles/cart.scss';
import Cros from '../images/icons/Close.png';
import SmallImg1 from '../images/productDetails/imageSmall_1.png';
import SmallImg3 from '../images/productDetails/imageSmall_3.png';
import Minus from '../images/icons/minus.png';
import Plus from '../images/icons/Plus.png';

export const CartPage = () => {
  return (
    <div className='cart'>
      <h1 className='cart__title'>Cart</h1>
      <div className='cart__productCards'>
        <div className='cart__productCards__card'>
          <div className='cart__productCards__card__cross'>
            <img src={Cros} alt="" className='cart__productCards__card__crossImg'/>
          </div>

          <div className='cart__productCards__card__imgContain'>
          <img src={SmallImg1} alt="" className='cart__productCards__card__img'/>
          </div>


          <p className='cart__productCards__card__name'>Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)</p>

          <div className='cart__productCards__card__btnContainer'>
            <div className='cart__productCards__card__btnContainer__btn'>
              <img src={Minus} alt="" />
            </div>
            <p className='cart__productCards__card__btnContainer__number'>1</p>
            <div className='cart__productCards__card__btnContainer__btn'>
              <img src={Plus} alt="" />
            </div>
          </div>


        </div>
      </div>

      <div className='cart__price'>

      </div>
    </div>
  )
}

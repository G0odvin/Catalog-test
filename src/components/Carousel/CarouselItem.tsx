import React from 'react';

type Props = {
  slide: string,
  stopSlide: ()=> void,
  startSlide: ()=> void,
}

export const CarouselItem: React.FC<Props> = ({ slide, stopSlide, startSlide}) => {
  return (
    <div className='carousel__item' onMouseEnter={stopSlide} onMouseOut={startSlide}>
      <img src={slide} alt="phone images" />
    </div>
  )
}

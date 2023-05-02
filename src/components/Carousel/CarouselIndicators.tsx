import React from 'react';

type Props ={
  slides: string[],
  currentIndex: number,
}

export const CarouselIndicators: React.FC<Props> = ({ slides, currentIndex}) => {
  return (

    <div className='carousel__dotsContainer'>
      <button className='carousel__dots'></button>

    </div>
  )
}


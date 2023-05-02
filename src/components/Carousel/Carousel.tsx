import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../styles/carousel.scss';
import arrowLeft from '../../images/icons/arrow_left.svg';
import arrowRight from '../../images/icons/arrow_right.svg';
import rectangleBtn from '../../images/icons/Rectangle 23.svg';
import { CarouselItem } from './CarouselItem';
import { CarouselIndicators } from './CarouselIndicators';

type Props = {
  slides: string[]
}

export const Carousel: React.FC<Props> = ({ slides }) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const slideInterval = useRef<null | NodeJS.Timeout>();

  const stopSlideTimer = () => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current)
    }
  };

  const startSliderTimer = () => {
    stopSlideTimer();

    const interval = setInterval(() => {
      setCurrentIndex(currentIndex => currentIndex < slides.length - 1 ? currentIndex + 1 : 0);
    }, 3000);

    slideInterval.current = interval
  }

  const prevBtn = () => {
    startSliderTimer();
    const index = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    setCurrentIndex(index);
  };

  const nextBtn = () => {
    startSliderTimer();
    const index = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  }

  useEffect(() => {
    startSliderTimer()

    return () => stopSlideTimer();
  }, [])

  return (
    <div className='carousel'>

      <div className='carousel__slider'>
        <button type='button' className='carousel__btn' onClick={prevBtn}>
          <img src={arrowLeft} alt="carousel batton img" className='carousel__btn__image' />
        </button>

        {/* <div className='carousel__image' style={{ backgroundImage: `url(${slides[currentIndex]})` }} /> */}
        <div
          className='carousel__imageContainer' style={{ transform: `translateX(${-currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <CarouselItem
              slide={slide}
              key={index}
              stopSlide={stopSlideTimer}
              startSlide={startSliderTimer}
            />
          ))}
        </div>
        <button type='button' className='carousel__btn' onClick={nextBtn}>
          <img src={arrowRight} alt="" className='carousel__btn__image' />
        </button>
      </div>

      <CarouselIndicators slides={slides} currentIndex={currentIndex} />
    </div>

  )
}

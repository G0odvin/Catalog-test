import React, { useCallback, useEffect, useRef, useState } from 'react';
import '../../styles/carousel.scss';
import arrowLeft from '../../images/icons/arrow_left.svg';
import arrowRight from '../../images/icons/arrow_right.svg';

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
  };

  const prevBtn = () => {
    startSliderTimer();
    const index = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;
    setCurrentIndex(index);
  };

  const nextBtn = () => {
    startSliderTimer();
    const index = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(index);
  };

  const goToSlide = (slideIndex: number) => {
    startSliderTimer();
    setCurrentIndex(slideIndex)
  };

  useEffect(() => {
    startSliderTimer()

    return () => stopSlideTimer();
  }, []);

  return (
    <div className='carousel'>

      <div className='carousel__slider'>
        <button type='button' className='carousel__btn' onClick={prevBtn}>
          <img src={arrowLeft} alt="carousel batton img" className='carousel__btn__image' />
        </button>

         <div
          className='carousel__imageContainer'
        >
          <div style={{ backgroundImage: `url(${slides[currentIndex]})` }} className='carousel__img'></div>

        </div>
        <button type='button' className='carousel__btn' onClick={nextBtn}>
          <img src={arrowRight} alt="carousel batton img" className='carousel__btn__image' />
        </button>
      </div>

      <div className='carousel__dotsContainer'>
        {slides.map((_, slideIndex) =>(
          <div 
            className={currentIndex === slideIndex ? 'carousel__dotsActive' : 'carousel__dots'} 
            key={slideIndex} onClick={() => goToSlide(slideIndex)} 
          />
        ))}
      </div>
    </div>

  )
}

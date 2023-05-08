import '../../styles/newModels.scss';
import ArrowRight from '../../images/icons/arrow_right_small.svg';
import { ProductCard } from '../ProductCard/ProductCard';

export const NewModels = () => {
  return (
    <div className='newModels'>
      <div className='newModels__titleContainer'>
        <h1 className='newModels__title'>Brand new models</h1>
        <div className='newModels__btnContainer'>
          <div className='sliderBtn'>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img--left' />
          </div>

          <div className='sliderBtn'>
            <img src={ArrowRight} alt="arrow right" className='sliderBtn__img' />
          </div>
        </div>

      </div>

      <div className='newModels__cardContainer'>
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      </div>
    </div>
  )
}
import './App.scss';
import { Carousel } from './components/Carousel/Carousel';
import { Header } from './components/Header/Header';

import sliderImg1 from './images/banner/Apple-iPhone-11-PNG-File.png';
import sliderImg2 from './images/banner/Apple-iPhone-12-PNG-Picture.png';
import sliderImg3 from './images/banner/banner.png';

const App = () => {
  const slides = [
    sliderImg1,
    sliderImg2,
    sliderImg3
  ];
  return (
    <div className="App">
      <Header />
      <div className='container'>
      <Carousel slides ={slides} />
      </div>

    </div>
  );
};

export default App;

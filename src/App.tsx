import { useEffect, useState } from 'react';
import './App.scss';
import { Carousel } from './components/Carousel/Carousel';
import { Categorys } from './components/Categorys/Categorys';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { HotPrices } from './components/HotPrices/HotPrices';
import { NewModels } from './components/NewModels/NewModels';
import { ProductCard } from './components/ProductCard/ProductCard';

import sliderImg1 from './images/banner/Apple-iPhone-11-PNG-File.png';
import sliderImg2 from './images/banner/Apple-iPhone-12-PNG-Picture.png';
import sliderImg3 from './images/banner/banner.png';
import sliderImg4 from './images/banner/Apple-iPhone-12-Download-PNG-Image.png'
import { Phones } from './types/Phones';
import { getPhones } from './api/data';
import { ProductsSlider } from './components/ProductsSlider/ProductsSlider';

const App = () => {
  const slides = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4
  ];
  const [phonesData, setPhonesData] = useState<Phones[]>([]);
  const [hotPriceProducts, setHotPriceProducts] = useState<Phones[]>([]);
  const [newModels, setNewModels] = useState<Phones[]>([]);
  const [isPhonesDataLoading, setIsPhonesDataLoading] = useState(false);

  const loadPhonesData = async () => {
    try {
      setIsPhonesDataLoading(true);
      const getPhonesData = await getPhones();
      setPhonesData(getPhonesData);
    } catch (error) {
      'Error'
      setIsPhonesDataLoading(false);
    } finally {
      setIsPhonesDataLoading(false);
    }
  };

  useEffect(() => {
    loadPhonesData();
    getHotPriceProducts();
    getBrandNewProducts();
  }, []);

  const getHotPriceProducts = async () => {
    try {
      setIsPhonesDataLoading(true);
      const dataHotPrice = await getPhones();
      // const hotPriceProducts = dataHotPrice.filter(product => product.discount > 0);
      setHotPriceProducts(dataHotPrice);
    } catch (error) {
      'Error'
      setIsPhonesDataLoading(false);
    } finally {
      setIsPhonesDataLoading(false);
    }
  };

  const getBrandNewProducts = async () => {
    try {
      setIsPhonesDataLoading(true);
      const dataProducts = await getPhones();
      const dataNewModels = dataProducts.filter(product => product.year === 2019);
      const dataNewModelsSorted = [...dataNewModels].sort((a, b) => b.price - a.price);
      setNewModels(dataNewModelsSorted);
    } catch (error) {
      'Error'
      setIsPhonesDataLoading(false);
    } finally {
      setIsPhonesDataLoading(false);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className='container'>
        <Carousel slides={slides} />
        {/* {hotPriceProducts && <HotPrices hotPriceProducts={hotPriceProducts} />} */}
        <ProductsSlider
        title = {'Hot prices'}
        productsData = {hotPriceProducts}
        />

        <Categorys />

        <ProductsSlider
        title = {'Brand new models'}
        productsData = {newModels} />
      </div>

      <Footer />
    </div>
  );
};

export default App;

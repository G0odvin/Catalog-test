import { createContext, useEffect, useState } from 'react';
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
import sliderImg4 from './images/banner/Apple-iPhone-12-Download-PNG-Image.png';
import { Phones } from './types/Phones';
import { getData } from './api/data';
import { ProductsSlider } from './components/ProductsSlider/ProductsSlider';
import { HomePage } from './pages/HomePage';
import { PhonesPage } from './pages/PhonesPage';
import { ProductDetailsPage } from './pages/ProductDetailsPage';
import { CartPage } from './pages/CartPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Route, Routes } from 'react-router-dom';


type SerchContextType = {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchContext = createContext<SerchContextType>({} as SerchContextType);

const App = () => {

  const [searchValue, setSearchValue] = useState('');


  return (
    <div className="App">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>


      <Header />
      <div className='container'>
        {/* <Carousel slides={slides} />

        <ProductsSlider
          title={'Hot prices'}
          productsData={hotPriceProducts}
        />

        <Categorys
          productsData={productsData}
        />

        <ProductsSlider
          title={'Brand new models'}
          productsData={newModels} /> */}

          {/* <PhonesPage /> */}

          {/* <ProductDetailsPage /> */}
          {/* <CartPage /> */}

          <Routes>
            <Route path='/home' element={<HomePage />} />
            <Route path='/cart' element={<CartPage />}/>
            <Route path='/phones' element={<PhonesPage />}/>
            <Route path='*' element={<NotFoundPage />}/>
          </Routes>

      </div>

      <Footer />
      </SearchContext.Provider>
    </div>
  );
};

export default App;

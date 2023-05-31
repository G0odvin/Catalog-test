import React, { useEffect, useState } from 'react';
import sliderImg1 from '../images/banner/Apple-iPhone-11-PNG-File.png';
import sliderImg2 from '../images/banner/Apple-iPhone-12-PNG-Picture.png';
import sliderImg3 from '../images/banner/banner.png';
import sliderImg4 from '../images/banner/Apple-iPhone-12-Download-PNG-Image.png';
import { getData } from '../api/data';
import { Phones } from '../types/Phones';
import { Carousel } from '../components/Carousel/Carousel';
import { ProductsSlider } from '../components/ProductsSlider/ProductsSlider';
import { Categorys } from '../components/Categorys/Categorys';

export const HomePage = () => {

  const slides = [
    sliderImg1,
    sliderImg2,
    sliderImg3,
    sliderImg4
  ];
  const [productsData, setProductsData] = useState<Phones[]>([]);
  const [hotPriceProducts, setHotPriceProducts] = useState<Phones[]>([]);
  const [newModels, setNewModels] = useState<Phones[]>([]);
  const [isPhonesDataLoading, setIsPhonesDataLoading] = useState(false);

  const loadProductsData = async () => {
    try {
      setIsPhonesDataLoading(true);
      const getPhonesData = await getData();
      setProductsData(getPhonesData);
    } catch (error) {
      'Error'
      setIsPhonesDataLoading(false);
    } finally {
      setIsPhonesDataLoading(false);
    }
  };

  useEffect(() => {
    loadProductsData();
    getHotPriceProducts();
    getBrandNewProducts();
  }, []);


  const getHotPriceProducts = async () => {
    try {
      setIsPhonesDataLoading(true);
      const dataHotPrice = await getData();
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
      const dataProducts = await getData();
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

    <>
      <Carousel slides={slides} />
      
      <ProductsSlider
        title={'Hot prices'}
        productsData={hotPriceProducts}
      />

      <Categorys
        productsData={productsData}
      />
      <ProductsSlider
        title={'Brand new models'}
        productsData={newModels}
      />
    </>

  )
}
import React, { useEffect, useState } from 'react';
import '../styles/phonesPage.scss';
import { getData } from '../api/data';
import { Phones } from '../types/Phones';
import { DataFilters } from '../components/DataFilters/DataFilters';

export const PhonesPage = () => {
  const [isPhonesDataLoading, setIsPhonesDataLoading] = useState(false);
  const [dataPhones, setDataPhones] = useState<Phones[]>([]);
  const [filtredPhones, setFiltredPhones] = useState<Phones[]>([]);

  const getPhones = async () => {
    try {
      setIsPhonesDataLoading(true);
      const dataProducts = await getData();
      const dataPhones = dataProducts.filter(product => product.category === 'phones');
      setDataPhones(dataPhones);

    } catch (error) {
      setIsPhonesDataLoading(false);
    } finally {
      setIsPhonesDataLoading(false);
    }
  };

  useEffect(() => {
    getPhones();
  }, [])

  // const mobilePhones = productsData.filter(product => product.category === 'phones');
  const countMobilePhones = dataPhones.length;

  return (
    <>
      <h1 className='phonesPage__title'>Mobile phones</h1>
      <p className='phonesPage__description'>{`${countMobilePhones} models`}</p>
      <DataFilters
        dataPhones={dataPhones}
        setFiltredPhones = {setFiltredPhones}
      />
    </>
  )
}

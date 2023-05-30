import React from 'react'
import { ProductCard } from '../ProductCard/ProductCard';
import { Phones } from '../../types/Phones';

type Props = {
  dataPhones: Phones[]
}

const ProductList: React.FC<Props> = ({ dataPhones }) => {
  return (
    <div>
      {dataPhones.map(phone => (
        <ProductCard
          key={phone.id}
          productData={phone}
          priceToken={phone.price}
        />
      ))}
    </div>
  )
}

export default ProductList
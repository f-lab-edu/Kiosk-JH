import React from 'react';
import { Product } from '@/types/product';

interface DrinkListProps {
  products : Product[];
}

const DrinkList = ({ products }: DrinkListProps) => {
  return (
    <div className="drinkList">
      {products.map(product => (<>
        <img src={product.image} alt={product.name} />
      <p>{product.name}</p>
      <p>{product.price}원</p></>))}
    </div>
  );
};

export default DrinkList;
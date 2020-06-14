import React from 'react';
import { Tshirt } from './Tshirt';

export const TshirtList = () => {

  const database = [
    { name: "red tshirt", price: 10.99, id: 1 },
    { name: "yellow hoodie", price: 24.99, id: 2 },
    { name: "blue shoes", price: 18.99, id: 3 },
    { name: "blue purse", price: 12.00, id: 4 },
  ]

  return (
    <div>
      {
        database.map(item => (
          <Tshirt name={item.name} price={item.price} key={item.id} />
        ))
      }
    </div>
  )
}
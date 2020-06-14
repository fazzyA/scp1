import React, { useContext } from 'react';
import { CartContext } from './CartContext';
var uniqid = require('uniqid');
export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price,id:uniqid() };
    setCart(currentState => [...currentState, tshirt]);
  }
  return (
    <div className='tshirt-box'>
      <h2>{props.name}</h2>
      <h4>{props.price}</h4>
      <button onClick={addToCart} className='btn'>Add to cart</button>
    </div>
  )
}
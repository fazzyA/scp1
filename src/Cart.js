import React, {useContext} from 'react';
import {CartContext} from './CartContext';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className='cart-box'>
      <h3>Your Cart</h3>
      <span>items in cart : {cart.length}</span>
      <br />
      <span>total price : {totalPrice}</span>
    </div>
  )
}
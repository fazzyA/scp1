import React from 'react'
import './style.css';
import { TshirtList } from './TshirtList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import Footer from './Footer';

const App = () => {
    return (
      <CartProvider>
        <div>
          <h1>Shopping Cart App</h1>
          <Cart />
          <TshirtList />
          <Footer />
        </div>
      </CartProvider>
    )
  }
export default App;
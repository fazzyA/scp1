import React from 'react'
import './style.css';
import { TshirtList } from './TshirtList';
import { Cart } from './Cart';
import { CartProvider } from './CartContext';
import Footer from './Footer';
import Header from './Header';
import CartItem from './CartItem';

const App = () => {
    return (
      <CartProvider>
        <div>
          <Header />
          <CartItem />
          <Cart />
          <TshirtList />
          <Footer />
        </div>
      </CartProvider>
    )
  }
export default App;
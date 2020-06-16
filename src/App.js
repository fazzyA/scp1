import React from 'react'
import './style.css';
import { CartProvider } from './CartContext';
import Header from './Header';
import Nav from './Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
      <CartProvider>
        <div>
          <Header />
          <Nav />
        </div>
      </CartProvider>
    )
  }
export default App;
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CartItem from "./CartItem";
import Footer from './Footer';
import { TshirtList } from './TshirtList';
import { Cart } from './Cart';

import App from './App'

export default function Nav() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route exact path="/">
          <Cart />
          <TshirtList />
          <Footer />
          </Route>
          <Route exact path="/cart">
            <CartItem />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
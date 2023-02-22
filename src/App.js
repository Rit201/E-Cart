// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Data from './Data-Function/Data.js'
import Header from './Header-Footer/Header.js';
import Main from './Main/Main.js';
import Footer from './Header-Footer/Footer.js';
import Cart from './Main/Cart.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const [Value, setValue] = useState();
  const [CouponFlag, setCouponFlag] = useState(false);

  const [CartItems, setCartItems] = useState([]);

  const AddToCart = (product) => {
    product.quantity === 0 && (product.quantity++);
    !CartItems.includes(product) ?
      setCartItems([product, ...CartItems])
      : alert('Product is Already in Cart');
  };

  const RemoveFromCart = (cart) => {
    cart.quantity = 0;
    setCartItems(CartItems.filter(item => item !== cart));
  };

  const Increase = (cart) => {
    setCartItems(CartItems.filter(item => {
      if (item === cart) {
        item.quantity++;
      }
      return item;
    }))
  };

  const Decrease = (cart) => {

    setCartItems(CartItems.filter(item => {
      if (item === cart) {
        item.quantity--;

        if (item.quantity < 1) {
          return false;
        }
        // else return true;
      }
      return item;
    }))
  };

  return (
    <div className="AppDiv">
      <BrowserRouter>
        <Header Count={CartItems} />
        <Routes>
          {/* <Route index element={<Main />} /> */}
          <Route path="/" element={<Main Data={Data} AddToCart={AddToCart} />} />
          <Route path="/cart" element={<Cart Value={Value} setValue={setValue} CouponFlag={CouponFlag} SetFlag={setCouponFlag} CartItems={CartItems} RemoveFromCart={RemoveFromCart} Increase={Increase} Decrease={Decrease} />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
};

export default App;

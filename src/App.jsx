import React, { useState } from "react";
import { Routes, Route} from "react-router-dom";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/productDetails";
import Navbar from "./layouts/Navbar";


const App = () => {
  const [cart, setCart] = useState([]);
//product add to cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };
//remove product
  const updateCart = (id, quantity) => {
    setCart((prevCart) =>
      prevCart.filter((item) => (item.id === id && quantity > 0) || item.id !== id)
    );
  };
  //quantity upadte
  const updateQuantity =(id , quantity) =>{
    setCart(
      cart.map(item =>
        item.id === id ? {...item , quantity: quantity} :item 
      )
    );
  };

  return (
    <>
    <Navbar cart={cart}/>
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} updateCart= {updateCart} cart={cart} />} />
      <Route path="/cart" element={<Cart cart={cart} updateCart={updateCart} updateQuantity={updateQuantity} />} />
    </Routes>
    </>
  );
};

export default App;

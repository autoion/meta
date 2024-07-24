import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Category from './pages/Category';
import Cart from './pages/Cart';
import './App.css';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <Router>
      <Headers cartItems={cartItems} />
      <Routes>
        <Route 
          path="/meta" 
          element={<Category cartItems={cartItems} onAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cartItems} />} 
        />
      </Routes>
    </Router>
  );
}

export default App;
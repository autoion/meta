import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Headers from './components/Headers';
import Category from './pages/Category';
import Cart from './pages/Cart';
import Addcard from './pages/Addcard';
import CardList from './pages/Cardlist'
import './App.css';


const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards([...cards, newCard]);
  };

  return (
    <Router>
      <Headers cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Category cartItems={cartItems} onAddToCart={handleAddToCart} />} />
        <Route path="/cart" element={<Cart cartItems={cartItems} />} />
        <Route path="/AddCards" element={<Addcard addCard={addCard} />} />
        <Route path="/CardList" element={<CardList cards={cards} />} />
      </Routes>
    </Router>
  );
};

export default App;

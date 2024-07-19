import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Headers from './components/Headers';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import './App.css';

const sampleProducts = [
  {
    id: 1,
    name: '브랜드A',
    image: 'https://via.placeholder.com/150',
    price: 35000,
    description: '편안하고 착용감이 좋은 신발',
    stock: 5,
  },
  {
    id: 2,
    name: '브랜드B',
    image: 'https://via.placeholder.com/150',
    price: 25000,
    description: '힙한 컬러가 매력적인 신발',
    stock: 3,
  },
  // 추가 샘플 데이터
];

const App = () => {
  const [cartItems, setCartItems] = React.useState([]);

  const handleProductDetail = (product) => {
    console.log(`Product detail for: ${product.name}`);
    // 추가 로직 (예: 상세 페이지로 이동)
  };

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(`Added to cart: ${product.name}`);
  };

  return (
    <Router>
      <Headers />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<div>홈페이지</div>} />
          <Route
            path="/category"
            element={
              <Category
                products={sampleProducts}
                onProductDetail={handleProductDetail}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/product/:id"
            element={
              <ProductDetail
                products={sampleProducts}
                onAddToCart={handleAddToCart}
              />
            }
          />
          <Route
            path="/cart"
            element={<Cart cartItems={cartItems} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

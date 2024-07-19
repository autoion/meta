import React from 'react';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <header>
      <nav>
        <Link to="/" className="logo">쇼핑몰</Link>
        <input type="text" placeholder="Search..." />
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/category">Category</Link></li>
          <li><Link to="/cart">Cart</Link></li>
        </ul>
      </nav>
      <div className="App-header">
        <h1>신발 상품 목록</h1>
        <p>현재 6개의 상품이 있습니다.</p>
      </div>
    </header>
  );
}

export default Headers;

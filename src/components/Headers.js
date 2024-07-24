import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import "../App.css";

function Headers({ cartItems }) {
  const cartItemCount = cartItems.length;

  /* 최신 react는 public 디렉토리에 바로 접근 불가 process.env.PUBLIC_URL 필요*/ 
  return (
    <header>
      <Link to="/cart">
        <img src={process.env.PUBLIC_URL + '/img/bag.png'} alt="Shopping Bag" />  
        <span className="cart-count">{cartItemCount}</span>
      </Link>
    </header>
  );
}

Headers.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Headers;

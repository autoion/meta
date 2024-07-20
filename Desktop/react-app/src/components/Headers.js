import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import "../App.css";

function Headers({ cartItems }) {
  return (
    <header>
      <Link to="/cart">
        <img
          src={process.env.PUBLIC_URL + '/img/bag.png'} // 올바른 이미지 경로 설정
          alt="Shopping Bag" // 적절한 대체 텍스트 설정
        />
      </Link>
      <span className="cart-count">{cartItems.length}</span>
    </header>
  );
}

// propTypes를 이용해 props의 타입과 필수 여부를 정의
Headers.propTypes = {
  cartItems: PropTypes.array.isRequired,
};

export default Headers;

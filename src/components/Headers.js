// src/components/Headers.js
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Headers({ cartItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  // 카트 페이지 여부를 확인
  const isCartPage = location.pathname === '/cart';

  // 뒤로가기 버튼 클릭 핸들러
  const handleBack_btn = () => {
    navigate('/meta');
  };

  // 카트 버튼 클릭 핸들러
  const handleCart_btn = () => {
    navigate('/cart');
  };

  return (
    <header className="header">
      {isCartPage ? (<img src={process.env.PUBLIC_URL + '/img/back-arrow.png'} alt="Back" className="back-button" onClick={handleBack_btn} />
      ) : (
        <>
          <div className="cart-link" onClick={handleCart_btn}>
            <img src={process.env.PUBLIC_URL + '/img/bag.png'} alt="Cart" className="cart-icon" />
            {cartItems.length > 0 && (<span className="cart-count">{cartItems.length}</span>)}
          </div>
        </>
      )}
    </header>
  );
}

export default Headers;

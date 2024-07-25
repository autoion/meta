import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Headers({ cartItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  /* 페이지마다 header를 다르게 */ 
  const isCartPage = location.pathname === '/cart';
  const isMyCardsPage = location.pathname === '/CardList';
  const isCheckOutPage = location.pathname === '/AddCards';

  /* 뒤로가기 버튼 클릭 핸들러 */
  const handleBack_btn = () => {
    navigate('/');
  };

  /* 카트 버튼 클릭 핸들러 */
  const handleCart_btn = () => {
    navigate('/cart');
  };

  return (
    /* 페이지마다 header를 다르게 */ 
    <header className={`header ${isCartPage ? 'cart-header' : ''} ${isMyCardsPage ? 'mycards-header' : ''} ${ isCheckOutPage ? 'checkout-header': ''} `} >
      {isCartPage ? (
        <img src={process.env.PUBLIC_URL + '/img/back-arrow.png'} alt="Back" className="back-button" onClick={handleBack_btn} />
      ) : isMyCardsPage ? (
        <div className="mycards-header-content">
          <span>보유카드</span>
          <button className="close-button" onClick={handleBack_btn}>X</button>
        </div>
      ) : isCheckOutPage ? (
        <div className="Checkout-header-content">
          <img src={process.env.PUBLIC_URL + '/img/back-arrow.png'} alt="Back" className="back-button" onClick={handleCart_btn} />
          <span>카드추가</span>
          <button className="close-button" onClick={handleBack_btn}>X</button>
        </div>
      ) : (
        <>
          <div className="cart-link" onClick={handleCart_btn}>
            <img src={process.env.PUBLIC_URL + '/img/bag.png'} alt="Cart" className="cart-icon"/>
            {cartItems.length > 0 && (<span className="cart-count">{cartItems.length} </span>)}
          </div>
        </>
      )}
    </header>
  );
}

export default Headers;

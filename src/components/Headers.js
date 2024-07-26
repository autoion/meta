import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../App.css';

function Headers({ cartItems }) {
  const navigate = useNavigate();
  const location = useLocation();

  /* 페이지마다 header를 다르게 */
  const isHomePage = location.pathname === '/';
  const isCartPage = location.pathname === '/cart';
  const isCardlistPage = location.pathname === '/Cardlist';
  const isAddcardPage = location.pathname === '/AddCards';

  /* 뒤로가기 버튼 클릭 핸들러 */
  const handleBack_btn = () => {
    navigate(-1);
  };

  /* 카트 버튼 클릭 핸들러 */
  const handleCart_btn = () => {
    navigate('/cart');
  };

  /* close-button 누르면 Home 핸들러 */
  const handleBack_HomePage_btn = () =>{
    navigate('/');
  }

  return (
    /* 페이지마다 header를 다르게 */ 
    <header className={`header ${isHomePage ? 'home-header' : ''} ${isCartPage ? 'cart-header' : ''} ${isCardlistPage ? 'cardlist-header' : ''} ${ isAddcardPage ? 'addcard-header': ''} `} >
      {isCartPage ? (
        <div className="cart-header">
        <img src={process.env.PUBLIC_URL + '/img/back-arrow.png'} alt="Back" className="cart-back-button" onClick={handleBack_btn} />
        </div>
      ) : isCardlistPage ? (
        <div className="cardlist-header-content">
          <span className="cardlist-title">보유카드</span>
          <button className="cardlist-close-button" onClick={handleBack_HomePage_btn}></button>
        </div>
      ) : isAddcardPage ? (
        <div className="addcard-header-content">
          <div className="left-content">
            <img src={process.env.PUBLIC_URL + '/img/black-back-arrow.png'} alt="Back" className="addcard-back-button" onClick={handleBack_btn} />
            <span className="addcard-title">카드추가</span>
          </div>
          <div className="right-content">
            <button className="addcard-close-button" onClick={handleBack_HomePage_btn}></button>
          </div>
        </div>
      ) : (
        <>
          <div className="home-header">
            <img src={process.env.PUBLIC_URL + '/img/bag.png'} alt="Cart" className="cart-icon" onClick={handleCart_btn}/>
            {cartItems.length > 0 && (<span className="cart-count">{cartItems.length} </span>)}
          </div>
        </>
      )}
    </header>
  );
}

export default Headers;

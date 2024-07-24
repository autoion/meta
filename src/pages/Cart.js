import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css';


/*장바구니가 비어있으면 상품이 없다라는 멘트 있다면 담겨져있는 상품의 정보가 뜸 */
function Cart({ cartItems }) {
  const navigate = useNavigate(); /*useNavigate 훅을 사용하여 navigate 함수 가져오기 */

  const TotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price.replace(/,/g, '')), 0);
  };

  const deliveryfee = 3000; /* 배송비 */

  return (
    <div className="cart-container">
    <button className="back-button" onClick={() => navigate(-1)}>뒤로가기</button>
    <h2>장바구니</h2>
    <p>현재 {cartItems.length}개의 상품이 담겨있습니다.</p>
    {cartItems.length === 0 ? (
      <p>장바구니에 상품이 없습니다.</p>
    ) : (
      <div>
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.description} className="cart-item-image" />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">{parseInt(item.price.replace(/,/g, '')).toLocaleString()}원</div>
              <div className="cart-item-quantity">
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
        ))}
        <div className="cart-summary">
          <div className="cart-summary-item">
            <span>상품 금액</span>
            <span>{TotalPrice().toLocaleString()}원</span>
          </div>
          <div className="cart-summary-item">
            <span>배송비</span>
            <span>{deliveryfee.toLocaleString()}원</span>
          </div>
          <div className="cart-summary-item total">
            <span>총 금액</span>
            <span>{(TotalPrice() + deliveryfee).toLocaleString()}원</span>
          </div>
          <button className="checkout-button">결제하기</button>
        </div>
      </div>
    )}
  </div>
  );
}

//propTypes를 이용해 props의 타입과 필수를 정의
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      stock: PropTypes.number,
    })
  ).isRequired,
};

export default Cart;

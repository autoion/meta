import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css';

/*장바구니가 비어있으면 상품이 없다라는 멘트 있다면 담겨져있는 상품의 정보가 뜸 */
function Cart({ cartItems }) {
  const [productCounts, setProductCounts] = useState(
    cartItems.reduce((acc, item) => {
      acc[item.id] = 1; 
      return acc;
    }, {})
  );

  const navigate = useNavigate(); 

  const handlecheckout_btn = () => {
    navigate('/Cardlist');
  };

  const TotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price.replace(/,/g, '')) * productCounts[item.id], 0);
  };

  const increaseProduct = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: prevCounts[id] + 1,
    }));
  };

  const decreaseProduct = (id) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [id]: Math.max(prevCounts[id] - 1, 1),
    }));
  };

  const totalPrice = TotalPrice(); 
  const deliveryfee = totalPrice >= 100000 ? 0 : 3000; /* 10만원 이상이면 배송비 0원, 아니면 3000원 */

  return (
    <div className="cart-container">
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
                <div className="cart-item-price">
                  {parseInt(item.price.replace(/,/g, '')).toLocaleString()}원
                </div>
                <div className="cart-item-quantity">
                  <button onClick={() => decreaseProduct(item.id)}>-</button>
                  <span>{productCounts[item.id]}</span>
                  <button onClick={() => increaseProduct(item.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <div className="cart-summary-item">
              <span>상품 금액</span>
              <span>{totalPrice.toLocaleString()}원</span>
            </div>
            <div className="cart-summary-item">
              <span>배송비</span>
              <span>{deliveryfee.toLocaleString()}원</span>
            </div>
            <div className="cart-summary-item total">
              <span>총 금액</span>
              <span>{(totalPrice + deliveryfee).toLocaleString()}원</span>
            </div>
            <button className="checkout-button" onClick={handlecheckout_btn}>
              결제하기
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

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

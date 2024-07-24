import React from 'react';
import PropTypes from 'prop-types';


/*장바구니가 비어있으면 상품이 없다라는 멘트 있다면 담겨져있는 상품의 정보가 뜸 */
function Cart({ cartItems }) {
  return (
    <div className="cart">
      <h2>장바구니</h2>
      {cartItems.length === 0 ? (
        <p>장바구니에 상품이 없습니다.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}원
            </li>
          ))}
        </ul>
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
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Cart;

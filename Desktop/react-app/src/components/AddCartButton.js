import React from "react";
import PropTypes from "prop-types";
import "../App.css";

const AddCartButton = ({ product, cartItems, onAddToCart }) => {
  const isInCart = cartItems.some(item => item.id === product.id);

  return (
    <button
      className={`add-cart-button ${isInCart ? "added" : ""}`}
      onClick={() => onAddToCart(product)}
      disabled={isInCart}
    >
      {isInCart ? "담겼습니다." : "담기"}
    </button>
  );
};

//propTypes를 이용해 props의 타입과 필수를 정의
AddCartButton.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
    stock: PropTypes.number,
  }).isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      stock: PropTypes.number,
    })
  ),
  onAddToCart: PropTypes.func.isRequired,
};

AddCartButton.defaultProps = {
  cartItems: [], 
};

export default AddCartButton;

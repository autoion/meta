import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import "../App.css";

function ProductCard({ product, cartItems, onProductDetail, onAddToCart }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.description} className="product-img" onClick={() => onProductDetail(product)} />
      <div className="product-name" onClick={() => onProductDetail(product)}>{product.name}</div>  
      <div className="product-price">{parseInt(product.price).toLocaleString()}원</div>
      <AddCartButton product={product} cartItems={cartItems} onAddToCart={onAddToCart} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    stock: PropTypes.number,
  }).isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string,
      stock: PropTypes.number,
    })
  ),
  onProductDetail: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductCard;

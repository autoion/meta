import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AddCartButton from './AddCartButton';

const ProductCard = ({ product, onAddToCart, cartItems }) => {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate(`/product/${product.id}`); // 상품 ID를 URL에 포함
  };

  return (
    <div className="product-card">
      <div className="product-info" onClick={handleProductClick}>
        <img src={product.image} alt={product.name} className="product-img" />
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        <p className="product-price">{product.price}원</p>
      </div>
      <AddCartButton product={product} cartItems={cartItems} onAddToCart={onAddToCart} />
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired, 
    image: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
  cartItems: PropTypes.array.isRequired,
};

export default ProductCard;

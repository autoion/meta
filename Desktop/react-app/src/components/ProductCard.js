import React from 'react';
import PropTypes from 'prop-types';
import AddCartButton from './AddCartButton';
import "../App.css";

function ProductCard({ product, cartItems, onProductDetail, onAddToCart }) {
  return (
    <div className="product-card">
      <img 
        src={product.image}  // imageSrc를 image로 변경
        alt={product.description} 
        className="product-img" 
        onClick={() => onProductDetail(product)} 
      />
      <div className="product-name">{product.brand}</div>  {/* name → brand로 변경 */}
      <div className="product-price">{product.price.toLocaleString()}원</div>
      <AddCartButton 
        product={product} 
        cartItems={cartItems} 
        onAddToCart={onAddToCart} 
      />
    </div>
  );
}

// propTypes를 이용해 props의 타입과 필수의 여부를 정의
ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    brand: PropTypes.string.isRequired,  
    image: PropTypes.string.isRequired,  
    price: PropTypes.string.isRequired,  
    description: PropTypes.string,
    stock: PropTypes.number,
  }).isRequired,
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      brand: PropTypes.string.isRequired,  
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

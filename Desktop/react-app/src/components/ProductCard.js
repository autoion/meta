import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

function ProductCard({ product, onProductDetail }) {
  const navigate = useNavigate();

  const handleProductDetail = (product) => {
    onProductDetail(product);
    navigate(`/product/${product.id}`);
    console.log(`구매: ${product.name}`);
  };

  return (
    <div className="product-card">
      <div className="product-img" onClick={() => handleProductDetail(product)}>
        <img src={product.image} alt={`${product.name} Image`} />
      </div>
      <h3 className="product-name" onClick={() => handleProductDetail(product)}>
        {product.name}
      </h3>
      <p className="product-description">
        {product.description}
      </p>
      <p className="product-price" onClick={() => handleProductDetail(product)}>
        가격: {product.price}원
      </p>
      <button className="product-detail-button" onClick={() => handleProductDetail(product)}>
        담기
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string,
  }).isRequired,
  onProductDetail: PropTypes.func.isRequired,
};

export default ProductCard;

import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import AddCartButton from "./AddCartButton";

function ProductCard({ product, cartItems, onProductDetail, onAddToCart }) {
  const navigate = useNavigate();

  const handleProductDetail = (product) => {
    onProductDetail(product);
    navigate(`/product/${product.id}`);
  };

  return (
    <article className="product-card" id={`product-card-${product.id}`}>
      <div className="product-img" onClick={() => handleProductDetail(product)}>
        <img src={product.image} alt={`${product.name} Image`} />
      </div>
      <h3 className="product-name" onClick={() => handleProductDetail(product)}>
        {product.name}
      </h3>
      <p className="product-price" onClick={() => handleProductDetail(product)}>
        가격: {product.price}원
      </p>
      <AddCartButton 
        product={product} 
        cartItems={cartItems} 
        onAddToCart={onAddToCart} 
      />
    </article>
  );
}

export default ProductCard;

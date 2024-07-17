import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

// ProductCard는 상품의 이미지, 이름, 가격
function ProductCard({ product}) {
  const navigate = useNavigate(); //페이지 이동

  const handleProductDetail = (product) => {
    navigate(`/product/${product.id}`);
    console.log(`구매: ${product.name}`);
  };

  return (
    <article id={`product-card-${product.id}`}>
      <div className="product-img" onClick={() => handleProductDetail(product)}>
        <img src={product.image} alt={`${product.name} Image`} />
      </div>
      <h3 className="product-name" onClick={() => handleProductDetail(product)}>
        {product.name}
      </h3>
      <p className="product-price" onClick={() => handleProductDetail(product)}>
        가격: {product.price}원
      </p>
    </article>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onProductDetail: PropTypes.func.isRequired,
};

export default ProductCard;

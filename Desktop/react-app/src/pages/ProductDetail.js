import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';


function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id, 10));

  if (!product) {
    return <div>제품을 찾을 수 없습니다.</div>;
  }

  const handleAddToCart = () => {
    onAddToCart(product);
  };

  return (
    <div className="product-detail">
      <img src={product.img} alt={`${product.name} 이미지`} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>가격: {product.price}원</p>
      <button onClick={handleAddToCart}>장바구니에 담기</button>
    </div>
  );
}

//propTypes를 이용해 props의 타입과 필수의 여부를 정의
ProductDetail.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      description: PropTypes.string,
      stock: PropTypes.number,
    })
  ).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default ProductDetail;

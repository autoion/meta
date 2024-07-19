import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

function Category({ products, cartItems, onProductDetail, onAddToCart }) {
  return (
    <Container>
      <h2 className="product-title">신발 상품 목록</h2>
      <p className="product-count">현재 {products.length}개의 상품이 있습니다.</p>
      <Grid container spacing={4}>
        {products.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard 
              product={product} 
              cartItems={cartItems}
              onProductDetail={onProductDetail}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}


//propTypes를 이용해 props의 타입과 필수를 정의
Category.propTypes = {
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
  onProductDetail: PropTypes.func.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

Category.defaultProps = {
  cartItems: [], 
};

export default Category;

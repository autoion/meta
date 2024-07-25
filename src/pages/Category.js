import React from 'react';
import PropTypes from 'prop-types';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  /* 최신 react는 public 디렉토리에 바로 접근 불가 process.env.PUBLIC_URL 필요*/ 
  { id: 1, name: '브랜드A', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: `${process.env.PUBLIC_URL}/img/product1.jpg` },
  { id: 2, name: '브랜드A', description: '힙한 컬러가 매력적인 신발', price: '25,000', image: `${process.env.PUBLIC_URL}/img/product2.png` },
  { id: 3, name: '브랜드B', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: `${process.env.PUBLIC_URL}/img/product3.jpg` },
  { id: 4, name: '브랜드B', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: `${process.env.PUBLIC_URL}/img/product4.jpg` },
  { id: 5, name: '브랜드C', description: '편안하고 착용감이 좋은 신발', price: '35,000', image: `${process.env.PUBLIC_URL}/img/product5.jpg` },
  { id: 6, name: '브랜드C', description: '힙한 컬러가 매력적인 신발', price: '35,000', image: `${process.env.PUBLIC_URL}/img/product6.png` },
];

function Category({ cartItems, onAddToCart }) {
  const Product_count = sampleProducts.length;
  /*상품의 상세페이지*/
  const handleProductDetail = (product) => {
    console.log(`Product detail for: ${product.name}`);
  };

  return (
    /* 상품 카드의 형태 */
    <Container>
      <h2 className="product-title">신발 상품 목록</h2>
      <p className="product-count">현재 {Product_count}개의 상품이 있습니다.</p>
      <Grid container spacing={4}>
        {sampleProducts.map(product => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <ProductCard 
              product={product} 
              onProductDetail={handleProductDetail}
              cartItems={cartItems}
              onAddToCart={onAddToCart}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

Category.propTypes = {
  cartItems: PropTypes.array.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

export default Category;
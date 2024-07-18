import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: '신발 1',
    image: 'https://via.placeholder.com/150',
    price: 10000,
    stock: 5,
  },
  {
    id: 2,
    name: '신발 2',
    image: 'https://via.placeholder.com/150',
    price: 20000,
    stock: 3,
  },
 
];

function Category() {
  return (
    <Container>
      <Grid container spacing={4}>
        {sampleProducts.map(product => (
          //xs - 모바일(한 줄에 1개), sm - 태블릿(한 줄에 2개), md - 데스크탑(한 줄에 3개)
          <Grid item xs={12} sm={6} md={4} key={product.id}> 
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Category;

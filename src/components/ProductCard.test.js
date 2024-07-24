import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from './ProductCard';
import { BrowserRouter } from 'react-router-dom';

const sampleProduct = {
  id: 1,
  name: '샘플 신발 1',
  image: 'https://via.placeholder.com/150',
  price: 10000,
  stock: 5,
};

test('renders ProductCard with product details', () => {
  const { getByText, getByAltText } = render(
    <BrowserRouter>
      <ProductCard product={sampleProduct} />
    </BrowserRouter>
  );

  // 이미지가 제대로 렌더링되는지 확인
  expect(getByAltText('샘플 신발 1')).toHaveAttribute('src', sampleProduct.image);

  // 제품 이름이 제대로 렌더링되는지 확인
  expect(getByText('샘플 신발 1')).toBeInTheDocument();

  // 가격이 제대로 렌더링되는지 확인
  expect(getByText(/10000원/)).toBeInTheDocument();

  // 재고가 제대로 렌더링되는지 확인
  expect(getByText(/재고: 5/)).toBeInTheDocument();
});

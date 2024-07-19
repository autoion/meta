import React from 'react';
import ProductCard from '../components/ProductCard';

const sampleProducts = [
  {
    id: 1,
    name: '브랜드A',
    image: 'https://via.placeholder.com/150',
    price: 35000,
    description: '편안하고 착용감이 좋은 신발',
  },
  {
    id: 2,
    name: '브랜드B',
    image: 'https://via.placeholder.com/150',
    price: 25000,
    description: '힙한 컬러가 매력적인 신발',
  },
  // 추가 샘플 데이터
];

function Category() {
  return (
    <div className="main-content">
      <h2 className="product-title">신발 상품 목록</h2>
      <p className="product-count">현재 {sampleProducts.length}개의 상품이 있습니다.</p>
      <div className="product-list">
        {sampleProducts.map(product => (
          <div className="product-item" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;

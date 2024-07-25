import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const CardList = ({ cards }) => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/AddCards'); // 카드 추가 페이지로 이동
  };

  return (
    <div className="card-list-container">
      <header className="header mycards-header">
        <div className="mycards-header-content">
          <span>보유카드</span>
          <button className="close-button" onClick={() => navigate('/')}>X</button>
        </div>
      </header>
      <h1>새로운 카드를 등록해주세요.</h1>
      <div className="add-card-button-container" onClick={handleAddCard}>
        <img src="/mnt/data/image.png" alt="Add Card" className="add-card-button" />
      </div>
      <div className="cards">
        {cards.map(card => (
          <div key={card.id} className="card">
            <span>{card.Card_number}</span>
            <span>{card.expiration_date}</span>
            <span>{card.Card_master}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;

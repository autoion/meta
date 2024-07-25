import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Cardlist = ({ cards }) => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/AddCards'); /* 카드 추가 */
  };

  return (
    <div className="cardlist-container">
      <h1>새로운 카드를 등록해주세요.</h1>
      <div className="add-card-button-container" onClick={handleAddCard}>
        <img src={process.env.PUBLIC_URL + '/img/card.png'} alt="Add Card" className="add-card-button" />
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

export default Cardlist;

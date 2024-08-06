import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

/*보유 카드 목록 */
const Cardlist = ({ cards }) => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/AddCards'); /* 카드 추가 */
  };

  return (
    <div className="cardlist-container">
      <h2 className="new-card">새로운 카드를 등록해주세요.</h2>
      <div className="addcard-button-container">
        <button className="addcard-button" onClick={handleAddCard}></button>
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

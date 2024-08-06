import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../App.css';

const Addcard = ({ initialCardData }) => {
  const navigate = useNavigate();
  const handlenHome_btn = () => navigate('/');

  /* 카드 정보 */
  const [formData, setFormData] = useState(initialCardData);

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);


  /* 카드번호 formating */
  const formatCardNumber = (number) => {
    const cleaned = number.replace(/\D/g, ''); /* 비문자 삭제 */
    const match = cleaned.match(/.{1,4}/g); /*4자리마다 끊기 */
    return match ? match.join('-') : cleaned; /* 하이픈 추가 */
  };

  /* 만료일 formating */
  const formatExpirationDate = (date) => {
    const cleaned = date.replace(/\D/g, '');
    if (cleaned.length <= 2) {
      return cleaned;
    }
    return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'Card_number') {
      setFormData({ ...formData, [name]: formatCardNumber(value) });
    } else if (name === 'expiration_date') {
      setFormData({ ...formData, [name]: formatExpirationDate(value) });
    } else if (name === 'Card_password') {
      if (value.length <= 4) {
        setFormData({ ...formData, [name]: value.split('') });
      }
    } else if (name === 'CVC') {
      //CVC 4자리로 제한
      setFormData({ ...formData, [name]: value.replace(/\D/g, '').slice(0, 4) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  /* 모든 필드가 채워졌는지 확인 */
  useEffect(() => {
    const areAllFieldsFilled = Object.values(formData).every(field => field !== '' && field.length > 0);
    setAllFieldsFilled(areAllFieldsFilled);
  }, [formData]);

  /*폼 제출을 제출했을 때 */
  const handleSubmit = (e) => {
    e.preventDefault();
    if (allFieldsFilled) {
      console.log('카드 정보:', formData);
      alert('카드 정보가 제출되었습니다!');
    }
  };

  return (
    <div className="addcard">
      <div className="Isnowcard-container">
        <div className="IC" />
          <span className="card-name-expiry">NAME MM/YY</span>
      </div>
      <form onSubmit={handleSubmit} className="addcard-form">
        <label>카드 번호<input type="text" name="Card_number" value={formData.Card_number} onChange={handleChange} required /></label>
        <label>만료일 (MM/YY) <input type="text" name="expiration_date" value={formData.expiration_date} onChange={handleChange} required placeholder="MM/YY" /></label>
        <label>카드 소유주 이름 <input type="text" name="Card_master" value={formData.Card_master} onChange={handleChange} required placeholder="카드에 표시된 이름과 동일하게 입력하세요." /></label>
        <label>보안 코드(CVC/CVV)<input type="password" name="CVC" value={formData.CVC} onChange={handleChange} required /></label>
        <label>카드 비밀번호
          <div className="card-password-input">
            {formData.Card_password.map((digit, index) => (
              <input key={index} type="password" name="Card_password" value={digit} onChange={handleChange} maxLength="1" className="card-password-box"/>
              
            ))}
            <div className="card-password-dots">
              <div className="card-password-dot"></div>
              <div className="card-password-dot"></div>
            </div>
          </div>
        </label>
        {allFieldsFilled && <button type="submit">작성 완료</button>}
      </form>
      <div className="link-container">
        <button className="link-button" onClick={handlenHome_btn}>다른 페이지로 이동</button>
      </div>
    </div>
  );
};

Addcard.propTypes = {
  initialCardData: PropTypes.shape({
    Card_number: PropTypes.string,
    expiration_date: PropTypes.string,
    Card_master: PropTypes.string,
    CVC: PropTypes.string,
    Card_password: PropTypes.arrayOf(PropTypes.string)
  })
};

Addcard.defaultProps = {
  initialCardData: {
    Card_number: '',
    expiration_date: '',
    Card_master: '',
    CVC: '',
    Card_password: ['', '']
  }
};

export default Addcard;

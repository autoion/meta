import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Addcard = () => {
  const navigate = useNavigate();
  const handlenHome_btn = () => navigate('/');

  /* 카드 정보 */
  const [formData, setFormData] = useState({
    Card_number: '',
    expiration_date: '',
    Card_master: '',
    CVC: '',
    Card_password: ''
  });

  const [allFieldsFilled, setAllFieldsFilled] = useState(false);

  /*입력 값이 변경 됐을 때*/
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  /* 모든 필드가 채워졌는지 확인 */
  useEffect(() => {
    const areAllFieldsFilled = Object.values(formData).every(field => field !== '');
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
    <div className="addcard-container">
      <form onSubmit={handleSubmit} className="addcard-form">
        <label>카드 번호:<input type="text" name="Card_number" value={formData.Card_number} onChange={handleChange} required /></label>
        <label>만료일 (MM/YY):<input type="text" name="expiration_date" value={formData.expiration_date} onChange={handleChange} required placeholder="MM/YY" /></label>
        <label>카드 소유주 이름:<input type="text" name="Card_master" value={formData.Card_master} onChange={handleChange} required placeholder="카드에 표시된 이름과 동일하게 입력하세요." /></label>
        <label>보안 코드(CVC/CVV):<input type="text" name="CVC" value={formData.CVC} onChange={handleChange} required /></label>
        <label>카드 비밀번호:<input type="password" name="Card_password" value={formData.Card_password} onChange={handleChange} required placeholder="비밀번호" /></label>
        {allFieldsFilled && <button type="submit">작성 완료</button>}
      </form>
      <div className="link-container">
        <button className="link-button" onClick={handlenHome_btn}>다른 페이지로 이동</button>
      </div>
    </div>
  );
};

export default Addcard;

import React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Headers() {
  return (
    <header>
      <nav> 
          홈페이지
        < input type="text" placeholder="검색"/>
        <ul className="nav-links">
        <li>
          <Link to="/">메인페이지</Link>
        </li>
        <li>
          <Link to="/category">목록</Link>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Headers;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './pages/Category';
import Headers from './components/Headers'; 

function App() {
  return (
    <Router>
      <Headers />
      <Routes>
        <Route path="/" element={<div>홈페이지</div> } />
        <Route path="/category" element={<Category/> } />
      </Routes>
    </Router>
  );
}

export default App;

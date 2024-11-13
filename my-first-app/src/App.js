import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePage from './HomePage';
import SecondPage from './SecondPage';
import Header from './Header';

function App() {
  return (
    <Router>
       <Header />
      <nav>
        <Link to="HomePage">Home</Link> | <Link to="/SecondPage">Second Page</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/second-page" element={<SecondPage />} />
      </Routes>
    </Router>
  
  );
}

export default App;

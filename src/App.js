import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import CatFactPage from './components/catFact';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/cat-fact" element={<CatFactPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

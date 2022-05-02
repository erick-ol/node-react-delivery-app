import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';

// consulta ao - https://v5.reactrouter.com/web/api/Redirect
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

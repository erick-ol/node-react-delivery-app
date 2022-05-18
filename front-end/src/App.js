import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import {
  Admin,
  Customer,
  Login,
  Register,
  Seller,
} from './Pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/*" element={ <Customer /> } />
          <Route path="/seller/*" element={ <Seller /> } />
          <Route path="/admin/*" element={ <Admin /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

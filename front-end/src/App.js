import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

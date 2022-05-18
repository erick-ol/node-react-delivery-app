import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Customer from './Pages/Customer';
import SellerOrders from './Pages/SellerOrders';
import Admin from './Pages/Admin';
import SellerOrder from './Components/Seller/SellerOrder';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/*" element={ <Customer /> } />
          <Route path="/seller/orders" element={ <SellerOrders /> } />
          <Route path="/seller/orders/:id" element={ <SellerOrder /> } />
          <Route path="/admin/manage" element={ <Admin /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

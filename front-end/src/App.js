import React from 'react';
import { Route, BrowserRouter, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Products from './Pages/Products';
import Checkout from './Pages/Checkout';
import CustomerOrders from './Pages/CustomerOrders';
import SellerOrders from './Pages/SellerOrders';
import CustomerOrderId from './Pages/CustomerOrderId';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <Products /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders" element={ <CustomerOrders /> } />
          <Route path="/customer/orders/:id" element={ <CustomerOrderId /> } />
          <Route path="/seller/orders" element={ <SellerOrders /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

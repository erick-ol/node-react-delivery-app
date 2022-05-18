import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  OrderId,
  OrdersList,
} from '../Components/Seller';

const Seller = () => (
  <div>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Navigate replace to="/seller/orders" /> } />
      <Route path="orders" element={ <OrdersList /> } />
      <Route path="orders/:id" element={ <OrderId /> } />
    </Routes>
  </div>
);

export default Seller;

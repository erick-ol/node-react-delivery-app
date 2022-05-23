import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Checkout,
  Navbar,
  OrderId,
  Orders,
  ProductsList,
} from '../Components/Customer';

const Customer = () => (
  <main>
    <div className="relative">
      <Navbar />
    </div>
    <Routes>
      <Route path="/" element={ <Navigate replace to="/customer/products" /> } />
      <Route path="products" element={ <ProductsList /> } />
      <Route path="checkout" element={ <Checkout /> } />
      <Route path="orders" element={ <Orders /> } />
      <Route path="orders/:id" element={ <OrderId /> } />
    </Routes>
  </main>
);

export default Customer;

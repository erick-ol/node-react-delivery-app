import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import {
  Navbar,
  Form,
} from '../Components/Admin';

const Admin = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={ <Navigate replace to="/admin/manage" /> } />
      <Route path="manage" element={ <Form /> } />
    </Routes>
  </>
);

export default Admin;

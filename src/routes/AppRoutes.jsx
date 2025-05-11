import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Dashboard from '../pages/Dashboard';
import Statistics from '../pages/Statistics';
import Wallet from '../pages/Wallet';
import Messages from '../pages/Messages';
import Profile from '../pages/Profile';
import Logout from '../pages/Logout';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/Dashboard" element={<Layout><Dashboard /></Layout>} />
      <Route path="/" element={<Layout><Statistics /></Layout>} />
      <Route path="/wallet" element={<Layout><Wallet /></Layout>} />
      <Route path="/messages" element={<Layout><Messages /></Layout>} />
      <Route path="/profile" element={<Layout><Profile /></Layout>} />
      <Route path="/logout" element={<Layout><Logout /></Layout>} />
    </Routes>
  );
};

export default AppRoutes;

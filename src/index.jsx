import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './pages/Dashboard.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

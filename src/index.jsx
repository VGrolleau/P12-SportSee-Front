import React from 'react';
import ReactDOM from 'react-dom/client';
import './utils/style/index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Dashboard from './pages/Dashboard.jsx';
import SideNav from './components/SideNav';
import App from './pages/App';
import Error from './pages/Error';

let userId = 12;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <SideNav />
      <Routes>
        <Route index element={<App userId={userId} />} />
        <Route path='/dashboard/:userId' element={<Dashboard />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

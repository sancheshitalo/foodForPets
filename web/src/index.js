import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import Sidebar from './components/sidebar';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';
import Home from './pages/home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Sidebar />
    <Home />
  </React.StrictMode>
);

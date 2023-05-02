import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';
import Cadastro from './pages/cadastro';
import Checkout from './pages/checkout';
import Petshop from './pages/petshop';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Petshop />
  </React.StrictMode>
);

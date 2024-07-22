import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

import './assets/js/main.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={'/web-app-ventas/'}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

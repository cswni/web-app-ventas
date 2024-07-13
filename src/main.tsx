import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { HashRouter } from 'react-router-dom';

import './assets/js/bootstrap.bundle.min.js';
import './assets/js/jquery.min.js';
// import './assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js';
import './assets/plugins/metismenu/metisMenu.min.js';
import './assets/js/main.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);

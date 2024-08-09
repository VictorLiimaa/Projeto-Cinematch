import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/pages/telainicio';
import { BrowserRouter } from 'react-router-dom';
import './src/pages/styles.css';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
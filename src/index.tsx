import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import "./multilanguage/i18n";
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

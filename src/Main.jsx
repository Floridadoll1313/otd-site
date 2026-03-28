import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Vite will try to find App.js or App.jsx automatically here
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

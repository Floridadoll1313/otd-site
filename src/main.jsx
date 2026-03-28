import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js'; // Points exactly to your App.js file
import './index.css';     // Your Neon Tailwind styles

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // 1. Make sure this is imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    {/* 2. This <BrowserRouter> wrap is the fix */}
    <BrowserRouter>
      <App />
    </BrowserRouter>

  </React.StrictMode>
);
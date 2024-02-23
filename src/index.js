import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter } from 'react-router-dom';
import { CategoryProvider } from './context/categories';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <CategoryProvider>
     <App />
  </CategoryProvider>
  </BrowserRouter>
);

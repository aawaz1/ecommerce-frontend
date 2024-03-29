import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom'
import { AuthProvider } from './context/Auth';
import { SearchProvider } from './context/Search';
import { CartProvider } from './context/cart';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/reset.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <AuthProvider>
      <CartProvider>
      <SearchProvider>
      <Router>
      <App />
      </Router>
      </SearchProvider>
      </CartProvider>
    </AuthProvider>
    
    
  

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbarr from './Component/Navbarr';
import Cards from "./Component/Cards";
import Login from "./Component/Login";



ReactDOM.render(
  <React.StrictMode>


    <App />
    <Navbarr/>
    
    
    
    <Cards/>
    </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();

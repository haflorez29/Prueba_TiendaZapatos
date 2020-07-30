import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Router from './Components/Router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

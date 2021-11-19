import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./assets/sass/custom.css"
import "./../node_modules/bootstrap/js/dist/base-component.js";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.js";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


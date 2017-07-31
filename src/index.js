//Depedencies
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//Routes
import AppRoutes from './routes';
//Assets
import './styles/main.css';
import registerServiceWorker from './registerServiceWorker';

// var URL = '138.68.49.219'
// if (window.location.href.indexOf('localhost') === -1 ) {
//   URL = 'http://localhost:1337'
// }

 
ReactDOM.render(
  <Router>
    <AppRoutes />
  </Router>,
  document.getElementById('root'));

registerServiceWorker();

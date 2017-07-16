import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import HomePage from './pages/home';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<HomePage/>, document.getElementById('root'));
registerServiceWorker();

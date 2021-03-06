import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './containersApp/App';
import registerServiceWorker from './registerServiceWorker';
import { titleNode } from './nodes/titleNode';
import { BrowserRouter } from 'react-router-dom';

titleNode();

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();

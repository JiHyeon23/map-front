import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
import reportWebVitals from './reportWebVitals';
//import FindWayBus from './findwaybus/findwaybus.jsx';
//import Startingbutton from './startingbutton/startingbutton.jsx';
//import Warning from './startingbutton/warning.jsx';
//import Startingbutton from './startingbutton/startingbutton.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

reportWebVitals();

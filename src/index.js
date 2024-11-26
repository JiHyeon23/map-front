import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
import FindWayBus from './findwaybus/findwaybus.jsx';
import reportWebVitals from './reportWebVitals';
import Find_place from './directions/find_place';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Find_place />
    </React.StrictMode>
);

reportWebVitals();

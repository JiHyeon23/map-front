import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
import FindWayBus from './findwaybus/findwaybus.jsx';
import Frame from './findwaybus/findwaybus_frame.jsx';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Frame />
    </React.StrictMode>
);

reportWebVitals();

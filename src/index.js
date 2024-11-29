import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
import reportWebVitals from './reportWebVitals';
import Startingbutton_frame from './startingbutton/startingbutton_frame.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Startingbutton_frame />
  </React.StrictMode>
);

reportWebVitals();

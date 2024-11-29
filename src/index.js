import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
import Findwaybus from './findwaybus/findwaybus.jsx';
//import Findwaybus_frame from './findwaybus/findwaybus_frame.jsx';

//import Startingbutton from './startingbutton/startingbutton.jsx';
//Searchlocation from './searchlocation/searchlocation.jsx';
import reportWebVitals from './reportWebVitals';
//import Warning from './startingbutton/warning.jsx';
//import Searchlocation from './searchlocation/searchlocation.jsx';
import Startingbutton_frame from './startingbutton/startingbutton_frame.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Startingbutton_frame />
  </React.StrictMode>
);

reportWebVitals();

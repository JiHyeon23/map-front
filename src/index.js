import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';
    import FindWayBus from './findwaybus/findwaybus.jsx';
//import Startingbutton from './startingbutton/startingbutton.jsx';
//import Searchlocation from './searchlocation/searchlocation.jsx';
import reportWebVitals from './reportWebVitals';
//import Warning from './startingbutton/warning.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <FindWayBus />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './main/main-normal.jsx';

//import Findwaybus from './findwaybus/findwaybus.jsx';
//import Findwaybus_frame from './findwaybus/findwaybus_frame.jsx';

import reportWebVitals from './reportWebVitals';
import Searchlocation from './searchlocation/searchlocation.jsx';
//import Searchlocation from './searchlocation/searchlocation.jsx';
//import Startingbutton_frame from './startingbutton/startingbutton_frame.jsx';
//import Startingbutton from './startingbutton/startingbutton.jsx';
//import Warning from './startingbutton/warning.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Searchlocation />
  </React.StrictMode>
);

reportWebVitals();

import React from 'react';
import {BrowserRouter} from 'react-router-dom';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';
import Routes from './routes';


function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export default App;

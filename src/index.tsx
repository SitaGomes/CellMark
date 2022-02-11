import React from 'react';
import ReactDOM from 'react-dom';
import {Home} from './pages/Home';
import {Product} from './pages/Product';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./styles/global.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<Product />} />
      
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';

import { Login } from './pages/Login';
import {Home} from './pages/Home';
import {Product} from './pages/Product';

import {BrowserRouter as Router, Route, Routes} from "react-router-dom"

import "./styles/global.scss"
import { CreateProduct } from './pages/Create';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/create' element={<CreateProduct />} />
        <Route path='/home' element={<Home />} />
        <Route path='/home/product/:id' element={<Product />} />
      
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

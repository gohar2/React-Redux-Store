import React from 'react';
import './App.css';
import Home from './containers/Home';
import ProductDetail from './containers/ProductDetail';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/product/:productId' element={<ProductDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

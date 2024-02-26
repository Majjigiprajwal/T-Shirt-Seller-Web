import React from 'react';

import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Header from './components/Header';


function App() {
  
  return (
    <div>
      <div>
        <Header/>
      <AddProductForm />
      <ProductList />
      </div>
    </div>
  );
}

export default App;


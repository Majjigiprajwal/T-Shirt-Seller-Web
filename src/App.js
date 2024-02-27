import React from 'react';
import './App.css';
import AddProductForm from './components/AddProductForm';
import ProductList from './components/ProductList';
import Header from './components/Header';



function App() {
  
  return (
    <div className="w-full min-h-screen bg-black">
          <div className="w-full">
          <Header />
          </div>
          <div className="w-full flex justify-center">
          <AddProductForm />
          </div>
          <div className='w-full flex justify-center '>
            <ProductList />
          </div>
         
    </div>
  );
}

export default App;


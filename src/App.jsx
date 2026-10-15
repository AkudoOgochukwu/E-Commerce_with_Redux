// App.js
import React from 'react';
import ProductList from './Components/ProductList';
import ShoppingCart from './Components/ShoppingCart';
import SuperCoin from './Components/SuperCoin'; // Import the new component
import './App.css';

const App = () => {
  return (
    <div>
      <h1 className='app-heading'>E-Commerce Application</h1>
      <ProductList />
      <ShoppingCart />
      <SuperCoin /> {/* Add it here */}
    </div>
  );
};

export default App;

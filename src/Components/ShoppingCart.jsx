import React from 'react';
import './ShoppingCart.css'; 
import { useDispatch, useSelector } from 'react-redux';
import { 
  removeItemFromCart, 
  clearCart, 
  increaseItemQuantity, 
  decreaseItemQuantity 
} from './CartSlice';

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  
  // Added the '*' operator to calculate the total price correctly
  const totalAmount = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Moved all handler functions ABOVE the return statement
  const handleRemoveItem = itemId => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleIncreaseQuantity = itemId => {
    dispatch(increaseItemQuantity(itemId));
  };

  const handleDecreaseQuantity = itemId => {
    dispatch(decreaseItemQuantity(itemId));
  };

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart-title">Shopping Cart</h2>
      
      {/* The <ul> tag now wraps the mapped <li> items */}
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <div className="quantity-controls">
              <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
              <span> {item.quantity} </span>
              <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
            </div>
            <button className="remove-item-btn" onClick={() => handleRemoveItem(item.id)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
      
      {/* Kept only the functional Clear Cart button */}
      <button className="clear-cart-btn" onClick={handleClearCart}>
        Clear Cart
      </button>
      
      {/* Cleaned up the string rendering for the total */}
      <div>
        {totalAmount > 0 ? <div>The total amount is ${totalAmount}</div> : <div>Your cart is empty</div>}
      </div>
    </div>
  );
};

export default ShoppingCart;
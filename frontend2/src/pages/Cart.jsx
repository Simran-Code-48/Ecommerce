import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/features/cart';

const Cart = () => {
  const cartItems = useSelector((state) => {console.log(state);return state.cart.items});
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };
  
  return (
    <div className="cart">
      
      <h2>Cart</h2>
      {
        
      (cartItems.length > 0) ? (
        <ul>
          {cartItems.map((item,i) => (
            <li key={i}>
              {item.Name}
              <button onClick={(item) => handleRemoveFromCart(item.id)}>X</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;

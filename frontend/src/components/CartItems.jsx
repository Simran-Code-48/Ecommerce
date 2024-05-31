import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromCart, checkout } from '../store/features/cartSlice'
import { decreaseStock } from '../store/features/productSlice';

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  let total = 0;
  let cartIds = [];
  return (
    <div className="p-5 mx-auto  rounded-lg shadow-lg">
      <div className="grid grid-cols-7 gap-4 items-center py-2 border-b border-gray-300">
        <p className="col-span-1 text-center">Products</p>
        <p className="col-span-2 text-center">Title</p>
        <p className="col-span-1 text-center">Price</p>
        <p className="col-span-1 text-center">Quantity</p>
        <p className="col-span-1 text-center">Total</p>
        <p className="col-span-1 text-center">Remove</p>
      </div>
      {cartItems.map((product) => {
        total += product.quantity * product.price;
        cartIds.push({id:product.id, quantity:product.quantity})
        return (
          <div key={product.id} className="border-b border-gray-300 py-2 grid grid-cols-7 gap-4 items-center">
            <img src={product.image} alt={product.name} className="w-12 h-12 mx-auto object-cover rounded" />
            <p className="text-center col-span-2">{product.name}</p>
            <p className="text-center">{product.price}</p>
			<div className='flex justify-center'>
				<button  onClick={() => {if(product.quantity>1){dispatch(updateQuantity({id:product.id, val:-1}))}}} className='text-2xl font-bold px-2'> - </button>
				<p className="bg-gray-200 border-none px-2 py-1 rounded text-center cursor-default">{product.quantity}</p>
				<button onClick={() => dispatch(updateQuantity({id:product.id, stock:product.stock, val:1}))} className='text-2xl font-bold px-2'> + </button>
			</div>
            <p className="text-center">{product.price * product.quantity}</p>
            <p onClick={() => dispatch(removeFromCart({id:product.id}))} className="text-center">X</p>
          </div>
        );
      })}
      <div className="mt-5 bg-white p-5 rounded-lg shadow-md lg:w-2/5">
        <h1 className="mb-5 text-xl">Cart Total</h1>
        <div>
          <div className="flex justify-between items-center mb-2">
            <p>Subtotal</p>
            <p>${total}</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between items-center mb-5">
            <h3>Total</h3>
            <h3>${total}</h3>
          </div>
        </div>
        <button onClick={() =>{;dispatch(decreaseStock(cartIds)); dispatch(checkout())}} className="w-full py-3 bg-orange-400 text-white font-semibold rounded hover:bg-orange-700">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartItems;

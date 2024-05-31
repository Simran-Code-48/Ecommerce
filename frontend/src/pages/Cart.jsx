import React from 'react'
import CartItems from '../components/CartItems'

const Cart = () => {
  return (
	<div>
		<h1 className='text-4xl font-bold font-mono'>Shopping Cart</h1>
		<CartItems/>
	</div>
  )
}

export default Cart
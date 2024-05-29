import React from 'react'
import products from '../components/data/products'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/features/cart';

const Product = () => {
  const productId = Number(useParams().productId);
  const dispatch = useDispatch();
  const productDetails = products.filter(product => product.id===productId)[0];
  console.log(productDetails)
  return (
	<div>Product {productId}
  <button className='block' onClick={() => dispatch(addToCart(productDetails))}>Add to Cart</button>
  </div>
  )
}

export default Product
import {configureStore} from '@reduxjs/toolkit';
import cartReducer from './features/cart.jsx'

export const store = configureStore({
	reducer: {
		cart: cartReducer,
	}
})

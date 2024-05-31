import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, image, name, price, stock } = action.payload;
      const existingItem = state.items.find(i => i.id === id);
      if (!existingItem) {
        state.items.push({ id, name, image, price, quantity: 1 , stock});
      }
    },
    updateQuantity: (state, action) => {
      const { id, stock, val } = action.payload;
      console.log(stock)
      const existingItem = state.items.find(i => i.id === id);
      if (existingItem) {
        existingItem.quantity += val;
      }
      if(existingItem.quantity<1){
        existingItem.quantity=1;
      }
      if(existingItem.quantity>stock){
        existingItem.quantity=stock;
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      const index = state.items.findIndex(item => item.id === id);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
    checkout: (state, action) => {
      state.items = [];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart, checkout } = cartSlice.actions;

export default cartSlice.reducer;

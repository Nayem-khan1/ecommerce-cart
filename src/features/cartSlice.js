import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  totalQuantity: 0,
  totalPrice: 0,
};

const updateLocalStorage = (cartItems) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};

const calculateTotals = (state) => {
  state.totalQuantity = state.cartItems.reduce((total, item) => total + item.quantity, 0);
  state.totalPrice = state.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      updateLocalStorage(state.cartItems);
      calculateTotals(state);
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
      updateLocalStorage(state.cartItems);
      calculateTotals(state);
    },
    updateQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      updateLocalStorage(state.cartItems);
      calculateTotals(state);
    },
    clearCart: (state) => {
      state.cartItems = [];
      updateLocalStorage(state.cartItems);
      state.totalQuantity = 0;
      state.totalPrice = 0;
    }
  }
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

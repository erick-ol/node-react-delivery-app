import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartChosenProduct: [],
};

export const cartChosenProductSlice = createSlice({
  name: 'cartChosenProduct',
  initialState,
  reducers: {
    buildCart: (state, action) => {
      state.cartChosenProduct = action.payload;
    },
    addProduct: (state, action) => {
      const otherProducts = state.cartChosenProduct
        .filter((prod) => prod.id !== action.payload.id);

      state.cartChosenProduct = [
        ...otherProducts,
        action.payload,
      ];

      const validProducts = state.cartChosenProduct.filter((prod) => prod.quantity > 0);
      state.cartChosenProduct = [...validProducts];
    },
    removeProduct: (state, action) => {
      const Products = state.cartChosenProduct
        .filter((prod) => prod.id !== action.payload);
      state.cartChosenProduct = [...Products];
    },
  },
});

export const { buildCart, addProduct, removeProduct } = cartChosenProductSlice.actions;

export default cartChosenProductSlice.reducer;

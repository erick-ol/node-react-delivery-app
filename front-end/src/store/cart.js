import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartProducts:
    JSON.parse(window.localStorage.getItem('cart'))
    || [],
};

export const slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    updateProduct: (state, { payload }) => {
      if (state.cartProducts.length > 0) {
        const otherProducts = state.cartProducts
          .filter((prod) => prod.id !== payload.id);

        state.cartProducts = [
          ...otherProducts,
          payload,
        ];
      } else {
        state.cartProducts = [payload];
      }

      window.localStorage.setItem('cart', JSON.stringify(state.cartProducts));
    },
    removeProduct: (state, { payload }) => {
      const products = state.cartProducts.filter((prod) => prod.id !== payload);
      state.cartProducts = [...products];

      window.localStorage.setItem('cart', JSON.stringify(state.cartProducts));
    },
  },
});

export const { updateProduct, removeProduct } = slice.actions;

export default slice.reducer;

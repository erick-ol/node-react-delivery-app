import { createSlice } from '@reduxjs/toolkit';

const calculateTotal = (cartProducts) => {
  console.log(cartProducts);
  if (!cartProducts || cartProducts.length === 0) return 0;
  return cartProducts.reduce((prev, curr) => ((+curr.price * curr.quant) + prev), 0);
};

const initialState = {
  cartProducts:
    JSON.parse(window.localStorage.getItem('cart'))
    || [],
  total: calculateTotal(JSON.parse(window.localStorage.getItem('cart'))),
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
        state.total = calculateTotal(state.cartProducts);
      } else {
        state.cartProducts = [payload];
        state.total = calculateTotal(state.cartProducts);
      }

      window.localStorage.setItem('cart', JSON.stringify(state.cartProducts));
    },
    removeProduct: (state, { payload }) => {
      const products = state.cartProducts.filter((prod) => prod.id !== payload);
      state.cartProducts = [...products];
      state.total = calculateTotal(state.cartProducts);

      window.localStorage.setItem('cart', JSON.stringify(state.cartProducts));
    },
    eraseCart(state) {
      state.cartProducts = [];
      state.total = 0;

      window.localStorage.removeItem('cart');
    },
  },
});

export const { updateProduct, removeProduct, eraseCart } = slice.actions;

export default slice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { sumField } from "../../lib/helpers";

/**
 * @typedef {object} ICartItem
 * @property {number} productId
 * @property {string} name
 * @property {number} price
 * @property {string} [image]
 * @property {string} description
 * @property {number} quantity
 */

/**
 * @typedef {object} ICartSlice
 * @property {ICartItem[]} items
 * @property {number} totalPrice
 */

/** @type {ICartSlice} */
const initialState = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /** @param {PayloadAction<ICartItem>} action */
    updateCart: (state, { payload }) => {
      let items = state.items;

      if (payload.quantity > 0) {
        const itemExists = items.find(
          (item) => item.productId === payload.productId
        );
        if (itemExists) {
          itemExists.quantity = payload.quantity;
        } else {
          items.push(payload);
        }
      } else {
        items = items.filter((item) => item.productId !== payload.productId);
      }

      state.items = items;
      state.totalPrice = sumField(state.items, "price", "quantity");
    },
    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { updateCart, clearCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

import { combineReducers } from "@reduxjs/toolkit";
import { cartReducer } from "./slice/cart.slice";

const reducers = {
  cart: cartReducer,
};

export const RootReducer = combineReducers<typeof reducers>(reducers);

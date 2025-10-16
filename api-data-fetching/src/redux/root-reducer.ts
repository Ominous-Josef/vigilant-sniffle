import { combineReducers } from "@reduxjs/toolkit";
import { BaseApi } from "./api/base-api";

const reducers = {
  [BaseApi.reducerPath]: BaseApi.reducer,
};

export const RootReducer = combineReducers<typeof reducers>(reducers);

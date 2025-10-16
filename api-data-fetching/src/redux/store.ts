import { configureStore } from "@reduxjs/toolkit";
import { BaseApi } from "./api/base-api";
import { RootReducer } from "./root-reducer";

export const store = configureStore({
  reducer: RootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(BaseApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

"use client";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./store";

/**
 * Redux provider component that wraps the application with the Redux store and persistor.
 * @param {{children: React.ReactNode}} props 
 * @returns 
 */
export const ReduxProvider = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {props.children}
      </PersistGate>
    </Provider>
  );
};

import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { sumField } from "~/lib/helpers";

export interface ICartItem {
  productId: number;
  name: string;
  price: number;
  image?: string;
  description: string;
  quantity: number;
}

interface ICartSlice {
  items: ICartItem[];
  totalPrice: number;
}

const initialState: ICartSlice = {
  items: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, { payload }: PayloadAction<ICartItem>) => {
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
  },
});

export const { updateCart } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;

"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import type { FC } from "react";
import type { ICartItem } from "~/redux/slice/cart.slice";

interface CartItemProps {
  item: ICartItem;
  handleUpdateCart: (cartItem: ICartItem, increment: boolean) => void;
}
export const CartItem: FC<CartItemProps> = ({ item, handleUpdateCart }) => {
  return (
    <div className="flex items-center gap-4 py-3">
      <div className="size-16 shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="size-full object-contain"
        />
      </div>
      <div className="space-y-4 w-full">
        <div>
          <p className="font-medium text-sm">{item.name}</p>
        </div>
        <div className="flex items-center justify-between gap-4">
          <p className="text-xs">Price: ${item.price.toFixed(2)}</p>
          <div className="inline-flex items-center justify-end rounded-lg bg-transparent border py-1 px-2 border-blue-500">
            <span
              className="inline-block cursor-pointer select-none rounded-md text-white p-1 bg-blue-500"
              onClick={() => handleUpdateCart(item, false)}
            >
              <MinusIcon size={14} />
            </span>
            <span className="inline-block w-10 p-1 text-center text-blue-500">
              {item.quantity}
            </span>
            <span
              className="inline-block cursor-pointer select-none rounded-md text-white p-1 bg-blue-500"
              onClick={() => handleUpdateCart(item, true)}
            >
              <PlusIcon size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

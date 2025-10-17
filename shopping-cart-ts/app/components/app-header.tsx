"use client";

import { ShoppingBasketIcon } from "lucide-react";
import type { FC } from "react";
import { useAppSelector } from "~/redux/hooks";

export const AppHeader: FC = () => {
  const { cart } = useAppSelector((state) => state);

  const cartItems = cart.items;
  return (
    <header className="border-b w-full border-gray-100">
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <h1 className="font-museoModerno text-2xl font-semibold">ShopTat</h1>

        <div className="relative">
          {cartItems.length > -1 && (
            <span className="bg-blue-500 absolute -top-1 left-5 inline-flex size-5 animate-bounce items-center justify-center rounded-full text-xs text-white">
              {cart.items.length}
            </span>
          )}
          <span className="inline-block cursor-pointer hover:text-blue-500 hover:bg-blue-100 rounded-full p-1">
            <ShoppingBasketIcon size={18} />
          </span>
        </div>
      </div>
    </header>
  );
};

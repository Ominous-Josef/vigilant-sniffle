"use client";

import { ShoppingBasketIcon } from "lucide-react";
import type { FC } from "react";
import { Link } from "react-router";
import { useAppSelector } from "~/redux/hooks";

export const AppHeader: FC = () => {
  const { items: cartItems } = useAppSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-gray-950 w-full border-b border-gray-100">
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <Link to={"/"} className="font-museoModerno text-2xl font-semibold">
          ShopTat
        </Link>

        <Link to={"/cart"} className="relative">
          {cartItems.length > 0 && (
            <span className="bg-blue-500 absolute -top-1 left-5 inline-flex size-5 animate-bounce items-center justify-center rounded-full text-xs text-white">
              {cartItems.length}
            </span>
          )}
          <span className="inline-block cursor-pointer hover:text-blue-500 hover:bg-blue-100 rounded-full p-1">
            <ShoppingBasketIcon size={18} />
          </span>
        </Link>
      </div>
    </header>
  );
};

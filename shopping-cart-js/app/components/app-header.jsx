"use client";

import { ShoppingBasketIcon } from "lucide-react";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { GithubIcon } from "./icons/github-icon";

export const AppHeader = () => {
  const { items: cartItems } = useSelector((state) => state.cart);

  return (
    <header className="sticky top-0 z-20 bg-white dark:bg-gray-950 w-full border-b border-gray-100">
      <div className="container mx-auto p-4 flex items-center justify-between gap-4">
        <Link to={"/"} className="font-museoModerno text-2xl font-semibold">
          ShopTat
        </Link>

        <div className="inline-flex items-center gap-6">
          <Link
            to={"/cart"}
            className="relative inline-flex items-center justify-center"
          >
            {cartItems.length > 0 && (
              <span className="bg-blue-500 absolute -top-1 left-5 inline-flex size-5 animate-bounce items-center justify-center rounded-full text-xs text-white">
                {cartItems.length}
              </span>
            )}
            <span className="inline-block cursor-pointer hover:text-blue-500 hover:bg-blue-100 rounded-full p-1">
              <ShoppingBasketIcon size={18} />
            </span>
          </Link>

          <Link
            to={
              "https://github.com/Ominous-Josef/vigilant-sniffle/blob/main/shopping-cart-js/README.md"
            }
            target="_blank"
            className="inline-block bg-gray-950 text-white dark:bg-white dark:text-gray-950 p-2 rounded-full"
          >
            <GithubIcon className="size-4" />
          </Link>
        </div>
      </div>
    </header>
  );
};

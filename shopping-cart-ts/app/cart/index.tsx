"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useCallback, type FC } from "react";
import { Link } from "react-router";
import { toast } from "sonner";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import {
	clearCart,
	updateCart,
	type ICartItem,
} from "~/redux/slice/cart.slice";

export const CartPage: FC = () => {
  const { cart } = useAppSelector((state) => state);

  const dispatch = useAppDispatch();

  const cartItems = cart.items;

  const handleUpdateCart = useCallback(
    (cartItem: ICartItem, increment: boolean) => {
      if (cartItem) {
        dispatch(
          updateCart({
            ...cartItem,
            quantity: increment ? cartItem.quantity + 1 : cartItem.quantity - 1,
          })
        );
      }
      return;
    },
    [dispatch]
  );

  const handleCheckout = useCallback(() => {
    dispatch(clearCart());
    toast.success("Checkout successful!");
  }, [dispatch]);

  return (
    <div className="relative">
      <div className="relative border border-gray-300 rounded-md p-4 h-fit w-full max-w-xl top-16 space-y-6 mx-auto mt-10">
        <h1 className="font-semibold text-lg border-b border-gray-200">
          Cart Items
        </h1>
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            <div className="divide-y divide-gray-200">
              {cartItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4 py-3">
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
              ))}
              <div className="space-y-2 mt-6">
                <div className="flex justify-between">
                  <label className="text-xs">Total items:</label>
                  <p className="text-medium text-sm">
                    {cartItems.reduce(
                      (total, item) => total + item.quantity,
                      0
                    )}
                  </p>
                </div>
                <div className="flex justify-between">
                  <label className="text-xs">Total Price:</label>
                  <p className="text-medium text-sm">
                    ${cart.totalPrice.toFixed(2)}
                  </p>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition cursor-pointer"
                  onClick={handleCheckout}
                >
                  Checkout
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-center py-10">
              <div className="text-lg">Your cart is empty.</div>
              <Link to="/products" className="border border-blue-500 py-2 px-4 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition inline-block">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

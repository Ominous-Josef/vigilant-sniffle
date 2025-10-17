"use client";

import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toast } from "sonner";
import {
  clearCart, updateCart
} from "../redux/slice/cart.slice";
import { CartItem } from "./components/cart-item";

export default function CartPage() {
  const { items: cartItems, totalPrice: cartTotalPrice } = useSelector(
    (state) => state.cart
  );

  const dispatch = useDispatch();

  const handleUpdateCart = useCallback(
    /**
     * 
     * @param {*} cartItem 
     * @param {boolean} increment 
     * @returns 
     */
    (cartItem, increment) => {
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
                <CartItem
                  key={index}
                  item={item}
                  handleUpdateCart={handleUpdateCart}
                />
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
                    ${cartTotalPrice.toFixed(2)}
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
              <Link
                to="/products"
                className="border border-blue-500 py-2 px-4 rounded-md text-blue-500 hover:bg-blue-500 hover:text-white transition inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

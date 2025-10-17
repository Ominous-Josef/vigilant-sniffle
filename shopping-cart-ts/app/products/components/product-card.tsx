"use client";

import { MinusIcon, PlusIcon } from "lucide-react";
import { useCallback, useMemo, type FC } from "react";
import { toast } from "sonner";
import type { IProduct } from "~/lib/interface";
import { useAppDispatch, useAppSelector } from "~/redux/hooks";
import { updateCart } from "~/redux/slice/cart.slice";

export const ProductCard: FC<{ product: IProduct }> = ({ product }) => {
  const { items: cartItems } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const cartItem = useMemo(() => {
    const foundItems = cartItems.filter((val) => val.productId === product.id);
    return foundItems.length > 0 ? foundItems[0] : null;
  }, [cartItems, product]);

  const handleAddToCart = useCallback(() => {
    dispatch(
      updateCart({
        description: product.description,
        image: product.image,
        name: product.name,
        price: product.price,
        productId: product.id,
        quantity: 1,
      })
    );
	toast.success("Product added to cart");
    return;
  }, [product, dispatch]);

  const handleUpdateCart = useCallback(
    (increment: boolean) => {
      if (cartItem) {
        const payload = {
          productId: product.id,
          quantity: increment ? cartItem.quantity + 1 : cartItem.quantity - 1,
          image: product.image,
          name: product.name,
          price: product.price,
          description: product.description,
        };
        dispatch(updateCart(payload));
      }
      return;
    },
    [cartItem, product, dispatch]
  );

  return (
    <div className="relative grid border border-gray-300 rounded-md h-full">
      <span className="inline-block absolute top-4 right-4 px-2 py-1 bg-blue-500 text-gray-100 text-xs rounded-full">
        {product.category}
      </span>
      <div className="h-50 w-full bg-gray-200 overflow-hidden">
        <img src={product.image} alt={product.name} className="size-full object-contain" />
      </div>
      <div className="flex flex-col justify-between gap-6 h-full p-4">
        <div className="space-y-3">
          <h1 className="font-medium">{product.name}</h1>
          <p className="text-xs">{product.description}</p>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4">
          <span>${product.price.toFixed(2)}</span>

          {cartItem ? (
            <div className="inline-flex items-center rounded-lg bg-transparent border py-1 px-2 border-blue-500">
              <span
                className="inline-block cursor-pointer select-none rounded-md text-white p-1 bg-blue-500"
                onClick={() => handleUpdateCart(false)}
              >
                <MinusIcon size={14} />
              </span>
              <span className="inline-block w-10 p-1 text-center text-blue-500">
                {cartItem.quantity}
              </span>
              <span
                className="inline-block cursor-pointer select-none rounded-md text-white p-1 bg-blue-500"
                onClick={() => handleUpdateCart(true)}
              >
                <PlusIcon size={14} />
              </span>
            </div>
          ) : (
            <button
              className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-gray-100 px-4 py-2 rounded-md cursor-pointer"
              onClick={handleAddToCart}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

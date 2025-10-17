"use client";

import Products from "app/lib/products.data.json";
import { useMemo, type FC } from "react";
import type { IProduct } from "~/lib/interface";
import { ProductCard } from "./components/product-card";

export const ProductsPage: FC = () => {
  console.log(Products);
  const products = useMemo(() => {
    return Products;
  }, [Products]);
  return (
    <section className="container mx-auto p-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <ProductCard key={index} product={product as IProduct} />
        ))}
      </div>
    </section>
  );
};

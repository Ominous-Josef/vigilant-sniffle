"use client";

import { useMemo } from "react";
import type { IProduct } from "~/lib/interface";
import Products from "~/lib/products.data.json";
import { ProductCard } from "./components/product-card";

export default function ProductsPage() {
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
}

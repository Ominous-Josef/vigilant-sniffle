import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/products", "./products/index.tsx"),
  route("/cart", "./cart/index.tsx"),
] satisfies RouteConfig;

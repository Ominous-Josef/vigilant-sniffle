import { index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.jsx"),
  route("/products", "./products/index.jsx"),
  route("/cart", "./cart/index.jsx"),
];

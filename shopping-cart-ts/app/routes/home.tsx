import { redirect, type LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return redirect("/products");
}

export function meta() {
  return [
    { title: "ShopTat" },
    { name: "description", content: "Welcome to ShopTat!" },
  ];
}

export default function Home() {
  return null; 
}

import { redirect } from "react-router";

export async function loader({ request }) {
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

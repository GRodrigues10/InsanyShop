import { Product } from "@/services/types";

export function addToCart(product: Product) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProduct = cart.find((p: Product) => p.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

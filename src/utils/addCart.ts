import { Product } from "@/services/types";
import { CartItem } from "@/services/types";

const CART_KEY = "cart";

export function getCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(product: Product) {
  const cart = getCart();

  const index = cart.findIndex((p) => String(p.id) === String(product.id));

  if (index > -1) {
    cart[index].quantity += 1; // se já existe, só aumenta
  } else {
    cart.push({ ...product, quantity: 1 }); // senão adiciona
  }

  saveCart(cart);
}

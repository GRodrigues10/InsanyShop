export function addToCart(product: any) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");

  const existingProduct = cart.find((p: any) => p.id === product.id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// Essa função é responsável por buscar todos os produtos da InsanyShop!
import { Product } from "./types";
export const fetchProducts = async () => {
  try {
    let allProducts: Product[] = [];
    let page = 1;
    const limit = 10;
    let hasMore = true;

    while (hasMore) {
      const response = await fetch(
        `https://api.insany.co/api/products?page=${page}&limit=${limit}`
      );
      if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
      }

      const data = await response.json();

    
      const products = data.products || data;

      if (products.length > 0) {
        allProducts = [...allProducts, ...products];
        page++;
     
        if (products.length < limit) {
          hasMore = false;
        }
      } else {
        hasMore = false;
      }
    }

    console.log("Produtos carregados:", allProducts);
    return allProducts;
  } catch (error) {
    console.error(error);
    return [];
  }
};
//Essa função é responsável por filtrar os produtos da InsanyShop por categorias!
export const fetchProductsByCategory = async (category: string) => {
  const allProducts = await fetchProducts();

  return allProducts.filter(
    (product: Product) =>
      product.category.toLowerCase() === category.toLowerCase()
  );
};

// Essa função é responsável por buscar os produtos da InsanyShopp pelo ID.
export const fetchProductById = async (id: number) => {
  const allProducts = await fetchProducts();
  return allProducts.find((p: Product) => p.id === id) || null;
};

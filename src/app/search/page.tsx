"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import Spinner from "@/components/spinnerLoading/Spinner";
import { StylesHome } from "../page.styled";
import { fetchProducts } from "@/services/api";
import { Product } from "@/services/types";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const searchTerm = searchParams.get("term") || "";

  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!searchTerm) {
      setProducts([]);
      return;
    }

    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchProducts();
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
      setLoading(false);
    };

    loadProducts();
  }, [searchTerm]);

  const handleSearch = (term: string) => {
    router.push(`/search?term=${encodeURIComponent(term)}`);
  };

  return (
    <StylesHome>
      <div className="content-section">
        <h1>Resultados para: &quot;{searchTerm}&quot;</h1>

        {loading ? (
          <div className="loading-container">
            <Spinner />
          </div>
        ) : products.length > 0 ? (
          <div className="cards">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="not">
            <p className="not-found">Nenhum produto encontrado.</p>
          </div>
        )}
      </div>
    </StylesHome>
  );
}

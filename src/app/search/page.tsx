"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard/ProductCard";
import Spinner from "@/components/spinnerLoading/Spinner";
import { StylesHome } from "../page.styled";
import { fetchProducts } from "@/services/api";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("term") || "";

  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchProducts();
      const filtered = allProducts.filter((p: any) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProducts(filtered);
      setLoading(false);
    };

    if (searchTerm) loadProducts();
  }, [searchTerm]);

  return (
    <StylesHome>
      <div className="content-section">
        <h1>Resultados para: "{searchTerm}"</h1>

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

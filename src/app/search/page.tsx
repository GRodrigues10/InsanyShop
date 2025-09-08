"use client";
import { useEffect } from "react";
import { useSearch } from "@/context/searchContext";
import { fetchProducts } from "@/services/api";
import ProductCard from "@/components/ProductCard/ProductCard";
import Spinner from "@/components/spinnerLoading/Spinner";
import { StylesHome } from "../page.styled";

export default function SearchPage() {
  const { term, results, setResults, loading, setLoading } = useSearch();
  const categoryNames: Record<string, string> = {
    eletronicos: "Eletrônicos",
    roupas: "Roupas e Calçados",
    casa: "Casa e Decoração",
    livros: "Livros",
    esportes: "Esporte e Lazer",
  };
  useEffect(() => {
    if (!term) {
      setResults([]);
      return;
    }

    const loadProducts = async () => {
      setLoading(true);
      const allProducts = await fetchProducts();
      const filtered = allProducts.filter((p) =>
        p.name.toLowerCase().includes(term.toLowerCase())
      );
      setResults(filtered);
      setLoading(false);
    };

    loadProducts();
  }, [term, setResults, setLoading]);

  return (
    <StylesHome>
      <div className="content-section">
        <h1>Resultados para: &quot;{term}&quot;</h1>
        {loading ? (
          <div className="loading-container">
            <Spinner />
          </div>
        ) : results.length > 0 ? (
          <div className="cards">
            {results.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={
                  categoryNames[product.category] || product.category
                }
              />
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

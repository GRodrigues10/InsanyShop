"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { StylesHome } from "./page.styled";
import Pagination from "@/components/Pagination/Pagination";
import Footer from "@/components/Footer/Footer";
import Spinner from "../components/spinnerLoading/Spinner";
import { fetchProducts } from "@/services/api";
import { Product } from "@/services/types";

export default function Home() {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const category: Record<string, string> = {
    categoria: "categoria",
    eletronicos: "Eletrônicos",
    roupas: "Roupas e Calçados",
    casa: "Casa e Decoração",
    livros: "Livros",
    esportes: "Esporte e Lazer",
  };

  //  Esse useEffect aqui é responsável por buscar todos os produtos quando a página carrega.
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const products = await fetchProducts();
      setAllProducts(products);
      setLoading(false);
    };
    loadProducts();
  }, []);

  // Já esse atualiza os produtos que estão sendo exibidos de acordo com a página do site.
  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    if (searchTerm) {
      setDisplayProducts(searchResults.slice(start, end));
    } else {
      setDisplayProducts(allProducts.slice(start, end));
    }
  }, [page, allProducts, searchResults, searchTerm]);

  // Função de busca
  // const handleSearch = async (query: string) => {
  //   setSearchTerm(query);
  //   if (!query) {
  //     setSearchResults([]);
  //     setPage(1);
  //     return;
  //   }
  //   const results = allProducts.filter((product) =>
  //     product.name.toLowerCase().includes(query.toLowerCase())
  //   );
  //   setSearchResults(results);
  //   setPage(1);
  // };

  return (
    <StylesHome>
      <div className="content-section">
        <div className="selects"></div>
        <h1>
          {searchTerm ? `Resultados para "${searchTerm}"` : "Todos os Produtos"}
        </h1>

        {loading ? (
          <div className="loading-container">
            <Spinner />
          </div>
        ) : (
          <div className="cards">
            {displayProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                categoryName={category[product.category] || product.category}
              />
            ))}
          </div>
        )}

        {/* Esse Pagination aqui recebe função para alterar a página do sitee */}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={Math.ceil(
            (searchTerm ? searchResults.length : allProducts.length) /
              itemsPerPage
          )}
        />

        <Footer />
      </div>
    </StylesHome>
  );
}

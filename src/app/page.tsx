"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard/ProductCard";
import { StylesHome } from "./page.styled";
import Pagination from "@/components/Pagination/Pagination";
import Footer from "@/components/Footer/Footer";
import Spinner from "../components/spinnerLoading/Spinner";

export default function Home() {
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [displayProducts, setDisplayProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  // Esse useEffect vai buscar todos os produtos
  useEffect(() => {
    const fetchAllProducts = async () => {
      let products: any[] = [];
      let currentPage = 1;
      let totalPages = 1;

      do {
        const res = await fetch(
          `https://api.insany.co/api/products?page=${currentPage}&limit=10`
        );
        const data = await res.json();
        products = products.concat(data.products);
        totalPages = data.pagination?.totalPages || 1;
        currentPage++;
      } while (currentPage <= totalPages);

      console.log("Todos os produtos:", products);
      setAllProducts(products);
      setLoading(false);
    };

    fetchAllProducts();
  }, []);

  //Esse useEffect vai atualizar os produtos exibidos de acordo com a página.
  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayProducts(allProducts.slice(start, end));
  }, [page, allProducts]);

  return (
    <StylesHome>
      <div className="content-section">
        <div className="selects"></div>
        <h1>Todos os Produtos</h1>

        {loading ? (
          <div className="loading-container">
            <Spinner />
          </div>
        ) : (
          <div className="cards">
            {displayProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* Pagination recebe função para alterar a página */}
        <Pagination
          currentPage={page}
          setPage={setPage}
          totalPages={Math.ceil(allProducts.length / itemsPerPage)}
        />

        <Footer />
      </div>
    </StylesHome>
  );
}

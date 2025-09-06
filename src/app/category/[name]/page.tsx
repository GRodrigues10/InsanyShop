"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "@/services/api";
import { StylesCategory } from "./category.styled";
import ProductCard from "@/components/ProductCard/ProductCard";
import Spinner from "@/components/spinnerLoading/Spinner";
import Pagination from "@/components/Pagination/Pagination";
import Footer from "@/components/Footer/Footer";
import { Product } from "@/services/types";


const category: Record<string, string> = {
  categoria: "categoria",
  eletronicos: "Eletrônicos",
  roupas: "Roupas e Calçados",
  casa: "Casa e Decoração",
  livros: "Livros",
  esportes: "Esporte e Lazer",
};

export default function CategoryPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [displayProducts, setDisplayProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPage = 6;

  useEffect(() => {
    const fetchCategoryProducts = async () => {
      setLoading(true);
      const products = await fetchProductsByCategory(name);
      console.log("Produtos da categoria:", products);
      setAllProducts(products);
      setLoading(false);
    };

    fetchCategoryProducts();
  }, [name]);

  useEffect(() => {
    const start = (page - 1) * itemsPage;
    const end = start + itemsPage;
    setDisplayProducts(allProducts.slice(start, end));
  }, [page, allProducts]);

  const categoryName = category[name] || name;
  

  return (
    <>
      <StylesCategory>
        <div className="content-section">
          <h1>{categoryName}</h1>

          {loading ? (
            <div className="loading-container">
              <Spinner />
            </div>
          ) : allProducts.length === 0 ? (
            <p>Nenhum produto encontrado.</p>
          ) : (
            <>
              <div className="cards">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              <Pagination
                currentPage={page}
                setPage={setPage}
                totalPages={Math.ceil(allProducts.length / itemsPage)}
              />
            </>
          )}
          <Footer />
        </div>
      </StylesCategory>
    </>
  );
}

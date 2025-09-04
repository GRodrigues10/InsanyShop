"use client";
import React, { useEffect, useState } from "react";
import { fetchProductsByCategory } from "@/services/api";
import { StylesCategory } from "./category.styled";
import ProductCard from "@/components/ProductCard/ProductCard";
import Spinner from "@/app/spinnerLoading/Spinner";
import Pagination from "@/components/Pagination/Pagination";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

const categoryLabels: Record<string, string> = {
  categoria: 'categoria',
  eletronicos: "Eletrônicos",
  roupas: "Roupas e Calçados",
  casa: "Casa e Decoração",
  livros: "Livros",
  esportes: "Esporte e Lazer",
};



export default function CategoryPage({ params }: { params: { name: string } }) {
  const { name } = params;
  const [allProducts, setAllProducts] = useState<any[]>([]);
  const [displayProducts, setDisplayProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

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
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setDisplayProducts(allProducts.slice(start, end));
  }, [page, allProducts]);

  const categoryName = categoryLabels[name] || name;

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
              totalPages={Math.ceil(allProducts.length / itemsPerPage)}
            />
          </>
        )}
         <Footer/>
      </div>
     
    </StylesCategory>
    
        </>
  );
}

"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ProdutosContext = createContext<any>(null);

export function ProdutosProvider({ children }: { children: React.ReactNode }) {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [resultadosBusca, setResultadosBusca] = useState<any[]>([]);


  useEffect(() => {
    const fetchProdutos = async () => {
      const res = await fetch("https://api.insany.co/api/products");
      const data = await res.json();
      setProdutos(data.products || data);
    };
    fetchProdutos();
  }, []);

  
  const searchProdutos = async (query: string) => {
    if (!query) {
      setResultadosBusca([]);
      return;
    }
    try {
      const res = await fetch(`https://api.insany.co/api/search?q=${query}`);
      const data = await res.json();
      setResultadosBusca(data.products || []);
    } catch (error) {
      console.error("Erro na busca:", error);
    }
  };

  return (
    <ProdutosContext.Provider value={{ produtos, resultadosBusca, searchProdutos }}>
      {children}
    </ProdutosContext.Provider>
  );
}

export const useProdutos = () => useContext(ProdutosContext);

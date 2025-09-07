"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/services/types";

interface SearchContextProps {
  term: string;
  setTerm: (term: string) => void;
  results: Product[];
  setResults: (results: Product[]) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  return (
    <SearchContext.Provider value={{ term, setTerm, results, setResults, loading, setLoading }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) throw new Error("useSearch must be used within a SearchProvider");
  return context;
};

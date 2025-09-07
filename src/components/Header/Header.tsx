"use client";
import { Search, ShoppingBag } from "lucide-react";
import { StylesHeader } from "./Header.styled";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Product } from "@/services/types";
import { useSearch } from "@/context/searchContext"; // import do contexto

function Header() {
  const router = useRouter();
  const { setTerm } = useSearch(); // pega a função para atualizar o termo
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchData = async () => {
    if (!search) return;

    try {
      const res = await fetch(`https://api.insany.co/api/search?q=${search}`);
      const data = await res.json();
      console.log("Retorno da API:", data);

      setResults(data.products || []);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  const handleSearch = () => {
    if (!search) return;
    setTerm(search); // atualiza o termo no contexto
    router.push("/search");
  };

  const goToCart = () => {
    router.push("/cart");
  };

  return (
    <StylesHeader>
      <div className="content-header">
        <h1 onClick={() => router.push("/")}>InsanyShop</h1>
        <div className="header-actions-desktop">
          <div>
            <input
              type="text"
              placeholder="Procurando por algo específico?"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
            />
            <Search size={20} className="search" onClick={handleSearch} />
          </div>
          <div className="btn-container">
            <ShoppingBag size={24} className="cart-button" onClick={goToCart} />
            <span className="circle">2</span>
          </div>
        </div>
        <div className="header-actions-mobile">
          <button
            className="close"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>

          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="header-actions-desktop">
              <div className="input-content">
                <input
                  type="text"
                  placeholder="Procurando por algo específico?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleSearch();
                  }}
                />
                <button className="btn" onClick={handleSearch}>
                  Buscar
                </button>
              </div>
              <div className="btn-container">
                <button className="btn-cart" onClick={goToCart}>
                  Ver Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="search-results">
          {results.map((product) => (
            <div key={product.id} className="card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>R$ {product.price}</p>
            </div>
          ))}
        </div>
      )}
    </StylesHeader>
  );
}

export default Header;

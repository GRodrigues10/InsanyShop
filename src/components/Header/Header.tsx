"use client";
import { Search, ShoppingBag } from "lucide-react";
import { StylesHeader } from "./Header.styled";
import { useRouter } from "next/navigation";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const fetchData = async () => {
    if (!search) return;

    try {
      const res = await fetch(`https://api.insany.co/api/search?q=${search}`);
      const data = await res.json();
      console.log("Retorno da API:", data);

      // se a API retorna { products: [...] }
      setResults(data.products || []);
    } catch (error) {
      console.error("Erro ao buscar:", error);
    }
  };

  const handleSearch = () => {
    if (!search) return;
    router.push(`/search?term=${search}`);
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
          {/* Botão hamburger */}
          <button
            className="close"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? "X" : "☰"}
          </button>

          {/* Sidebar mobile */}
          <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
            <div className="header-actions-desktop">
              <div className="input-content">
                <input
                  type="text"
                  placeholder="Procurando por algo específico?"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") fetchData();
                  }}
                />
                <button className="btn" onClick={handleSearch}>Buscar</button>
              </div>
              <div className="btn-container">
                <button className="btn-cart" onClick={goToCart}>
                  {" "}
                  Ver Carrinho
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Renderiza os cards da busca */}
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

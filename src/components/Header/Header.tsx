'use client'; // Isso é obrigatório
import { Search, ShoppingBag } from "lucide-react";
import { StylesHeader } from "./Header.styled";
import { useRouter } from "next/navigation";

function Header() {
  const router = useRouter();
  const home = () => {
    router.push('/');
  }
  return (
    <StylesHeader>
      <div className="content-header">
        <h1 onClick={home}>InsanyShop</h1>
        <div className="header-actions-desktop">
          <div>
            <input type="text" placeholder="Procurando por algo específico?" />
            <Search size={20} className="search" />
          </div>
          <div className="btn-container">
            <ShoppingBag size={24} className="cart-button" />
            <span className="circle">2</span>
          </div>
        </div>
        <div className="header-actions-mobile">
          <button>☰</button>
        </div>
      </div>
    </StylesHeader>
  );
}

export default Header;

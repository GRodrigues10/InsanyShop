import ProductCard from "@/components/ProductCard/ProductCard";
import { StylesHome } from "./page.styled";

export default function Home() {
  return (
    <StylesHome>
      <div className="content-section">
        <h1>Todos os Produtos</h1>
        <div className="cards">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </StylesHome>
  );
}

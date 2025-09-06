import React from "react";
import { StylesProductCard } from "./ProductCard.styled";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/utils/format";
import { useRouter } from "next/navigation";
import { addToCart } from "@/utils/addCart";

interface Product {
  image: string;
  id: number;
  category: string;
  rating: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const router = useRouter();

  const details = () => {
    router.push(`/product/${product.id}`);
  };

 const handleAddToCart = (e: React.MouseEvent<HTMLButtonElement>) => {
  e.stopPropagation();
  addToCart(product);
  alert(`${product.name} adicionado ao carrinho!`);
};

  return (
    <StylesProductCard>
      <div className="content-section">
        <div className="product-card" onClick={details}>
          <img src={product.image} alt={product.name} />
          <div className="product-category">
            <p>{product.category}</p>
            <p>
              <span>★</span> {product.rating}
            </p>
          </div>
          <div className="product-description">
            <p>
              <strong>{product.name}</strong>
            </p>
            <p>{product.description.slice(0, 59)}...</p>
          </div>
          <div className="product-info">
            <h3>R$ {formatPrice(product.price)}</h3>
            <p>{product.stock} em estoque</p>
          </div>
          <div className="btn">
            <button onClick={handleAddToCart}>
              <span>
                <ShoppingCart />
              </span>{" "}
              Adicionar
            </button>
          </div>
        </div>
      </div>
    </StylesProductCard>
  );
}

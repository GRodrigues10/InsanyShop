import React from "react";
import { StylesProductCard } from "./ProductCard.styled";
import { ShoppingCart } from "lucide-react";
import { formatPrice } from "@/utils/format";

// Tipagem dos produtos que está sendo recebido da API.
interface Product {
  image:string,
  id: number;
  category: string;
  rating: number;
  name: string;
  description: string;
  price: number;
  stock: number;
}
// Criando o tipo Props para enviar o produto.
interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  return (
    <StylesProductCard>
      <div className="content-section">
        <div className="product-card">
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
            <button>
              <span>
                <ShoppingCart />
              </span> Adicionar
            </button>
          </div>
        </div>
      </div>
    </StylesProductCard>
  );
}

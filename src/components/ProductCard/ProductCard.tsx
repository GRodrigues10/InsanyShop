import React from "react";
import { StylesProductCard } from "./ProductCard.styled";
import { ShoppingCart } from "lucide-react";

function ProductCard() {
  return (
    <StylesProductCard>
      <div className="content-section">
        <div className="product-card">
          <img src="/img-test.png" alt="Imagem dos produtos" />
          <div className="product-category">
            <p>Roupas e Calçados</p>
            <p>
              <span>★</span> 4,4
            </p>
          </div>
          <div className="product-description">
            <p>
              <strong>Camiseta Básica Premium</strong>
            </p>
            <p>Camisa 100% algodão com corte moderno e acabamento premium...</p>
          </div>
          <div className="product-info">
            <h3>R$ 89,99</h3>
            <p>50 em estoque</p>
          </div>
          <div className="btn">
            <button>
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

export default ProductCard;

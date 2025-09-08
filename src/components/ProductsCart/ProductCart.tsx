"use client";
import React from "react";
import { StylesCartCards } from "./ProductCard.styled";
import { Trash2 } from "lucide-react";
import { CartItem } from "@/services/types";
import { saveCart, getCart } from "@/utils/addCart";
import { formatPrice } from "@/utils/format";


interface Props {
  product: CartItem;
}

export default function ProductCart({ product }: Props) {
  const handleRemove = () => {
    const cart = getCart().filter((p) => p.id !== product.id);
    saveCart(cart);
    window.location.reload(); 
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newQty = parseInt(e.target.value);
    const cart = getCart();
    const index = cart.findIndex((p) => p.id === product.id);
    if (index > -1) {
      cart[index].quantity = newQty;
      saveCart(cart);
      window.location.reload();
    }
  };

  return (
    <StylesCartCards>
      <div className="content-section">
        <div className="card-product">
          <img src={product.image} alt={product.name} />
          <div className="text">
            <div className="header">
              <h2>{product.name}</h2>
              <p onClick={handleRemove}>
                <Trash2 style={{ cursor: "pointer" }} />
              </p>
            </div>
            <p>{product.description}</p>
            <div className="footer">
              <select value={product.quantity} onChange={handleQuantityChange}>
                {Array.from({ length: 10 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>
              <p>
                <strong>R$ {formatPrice(product.price * product.quantity)}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </StylesCartCards>
  );
}

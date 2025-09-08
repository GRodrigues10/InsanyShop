"use client";
import React, { useEffect, useState } from "react";
import { StylesCart } from "./page.styled";
import { Undo2 } from "lucide-react";
import ProductCart from "@/components/ProductsCart/ProductCart";
import { useRouter } from "next/navigation";
import RequestSummary from "@/components/RequestSummary/RequestSummary";
import { addToCart, getCart } from "@/utils/addCart";
import { CartItem } from "@/services/types";
import { formatPrice } from "@/utils/format";
interface Props {
  product: CartItem;
}

function Page() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);

  const goToHome = () => {
    router.push("/");
  };

  // Carregar carrinho ao montar
  useEffect(() => {
    setCart(getCart());
  }, []);

  return (
    <StylesCart>
      <div className="content-section">
        <div className="cart-products">
          <div className="btn">
            <span onClick={goToHome}>
              <Undo2 />
            </span>
            Voltar
          </div>
          <h1>SEU CARRINHO</h1>
          <p>
            Total ({cart.length} produtos)
            <strong>
              R$ {formatPrice(cart.reduce((acc, p) => acc + p.price * p.quantity, 0))}
            </strong>
          </p>
        </div>

        <div className="cards">
          {cart.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            cart.map((item) => (
              <ProductCart key={item.id} product={item} />
            ))
          )}
        </div>
      </div>
      <RequestSummary cart={cart} shippingFee={40}  />
    </StylesCart>
  );
}

export default Page;

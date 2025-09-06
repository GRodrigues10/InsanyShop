"use client";
import React from "react";
import { StylesCart } from "./page.styled";
import { Undo2 } from "lucide-react";
import ProductCart from "@/components/ProductsCart/ProductCart";
import { useRouter } from "next/navigation";
import RequestSummary from "@/components/RequestSummary/RequestSummary";

function Page() {
  const router = useRouter();
  const goToHome = () => {
    router.push("/");
  };
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
            Total (3 produtos) <strong> R$ 161,00 </strong>
          </p>
        </div>
        <div className="cards">
          <ProductCart />
          <ProductCart />
          <ProductCart />
        </div>
      </div>
      <RequestSummary />
    </StylesCart>
  );
}

export default Page;

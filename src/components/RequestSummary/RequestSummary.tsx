import React from "react";
import { StylesRequestSummary } from "./RequestSummary.styled";
import { CartItem } from "@/services/types";
import { formatPrice } from "@/utils/format";

interface Props {
  cart: CartItem[]; 
  shippingFee?: number; 
}

function RequestSummary({ cart, shippingFee = 40 }: Props) {
  const subtotal = (cart || []).reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingFee;
  const buy = () => {
    if (subtotal > 0) {
      alert("Compra realizada!");
    }
    else{
      alert('Adicione um produto no carrinho!')
    }
  };
  return (
    <StylesRequestSummary>
      <div className="content-section">
        <div className="summary">
          <div className="header-summary">
            <h1>RESUMO DO PEDIDO</h1>
            <div className="total-price">
              <p>Subtotal de produtos</p>
              <p>R$ {formatPrice(subtotal)}</p>
            </div>
            <div className="delivery">
              <p>Entrega</p>
              <p>R$ {formatPrice(shippingFee)}</p>
            </div>
            <hr />
            <div className="total">
              <p>
                <strong>Total</strong>
              </p>
              <p>
                <strong>R$ {formatPrice(total)}</strong>
              </p>
            </div>
            <button onClick={buy}>FINALIZAR A COMPRA</button>
          </div>
          <div className="footer-summary">
            <p>AJUDA</p>
            <p>REEMBOLSOS</p>
            <p>ENTREGA E FRETE</p>
            <p>TROCAS E DEVOLUÇÕES</p>
          </div>
        </div>
      </div>
    </StylesRequestSummary>
  );
}

export default RequestSummary;

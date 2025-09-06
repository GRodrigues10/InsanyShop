import React from "react";
import { StylesRequestSummary } from "./RequestSummary.styled";

function RequestSummary() {
  return (
    <StylesRequestSummary>
      <div className="content-section">
        <div className="summary">
          <div className="header-summary">
            <h1>RESUMO DO PEDIDO</h1>
            <div className="total-price">
              <p>Subtotal de produtos</p>
              <p>R$ 161,00</p>
            </div>
            <div className="delivery">
              <p>Entrega</p>
              <p>R$ 40,00</p>
            </div>
            <hr />
            <div className="total">
              <p>
                <strong>Total</strong>
              </p>
              <p>
                <strong>R$ 201,00</strong>
              </p>
            </div>
            <button>FINALIZAR A COMPRA</button>
          </div>
          <div className="footer-summary">
            <p>AJUDA</p>
            <p>REEMBOLSOS</p>
            <p>ENTREGAR E FRETE</p>
            <p>TROCAS E DEVOLUÇÕES</p>
          </div>
        </div>
      </div>
    </StylesRequestSummary>
  );
}

export default RequestSummary;

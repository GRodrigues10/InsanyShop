import React from "react";
import { StylesSortSelect } from "./SortSelect.Styled";

function SortSelect() {
  return (
    <StylesSortSelect>
        <select>
          <option value="order">Ordenar por</option>
          <option value="price-asc">Preço: Maior - menor</option>
          <option value="price-desc">Preço: Menor - maior</option>
          <option value="best-sellers">Mais vendidos</option>
        </select>
    </StylesSortSelect>
  );
}

export default SortSelect;

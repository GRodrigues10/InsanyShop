"use client";
import styled from "styled-components";
// Estilos Globais do componente de Paginação.
export const StylesPagination = styled.div`
 margin-top: 30px;
  width: 100%;
  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
   
  }

  .pagination {
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
  }
  .pagination div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    color: #737380;
    background-color: #e9e9f0;
    cursor: pointer;
    font-size: 16px;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    &:hover{
      border: 1px solid;
    }
  }
`;

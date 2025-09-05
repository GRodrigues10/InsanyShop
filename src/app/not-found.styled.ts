"use client";
import styled from "styled-components";
// Página de erro 404. Caso o usuário acesse uma página que não existe, essa página vai aparecer.
export const StylesNotFound = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  .content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }

  .content-section h1 {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    /* color: #41414D; */
  }

  .content-section button {
    width: 95%;
    background-color: #41414d;
    padding: 10px;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: #2f2f3a;
    }
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2rem;
    }

    .content-section p {
      font-size: 1.1rem;
    }

    .content-section button {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section h1 {
      font-size: 2.1rem;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
  }
`;

"use client";
import styled from "styled-components";
// Mobile First - Começando o footer para as telas mobile.

export const StylesFooter = styled.footer`
  margin-top: 40px;
  width: 100%;
  margin-bottom: 100px;
  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .content-section h1 {
    font-weight: bold;
  }
  .content-section .categories {
    display: grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }
  .content-section .categories div {
    width: 208px;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;
    background-color: #ffffff;
    border-radius: 10px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      background-color: black;
      color: white;
    }
  }
  .active {
    background-color: black !important;
    color: white;
  }

  @media screen and (min-width: 530px) {
    .content-section .categories {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media screen and (min-width: 768px) {
    .content-section .categories {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .content-section .categories {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section .categories {
      display: flex;
      max-width: 970px;
    }
  }

  @media screen and (min-width: 1440px) {
   .content-section .categories {
      max-width: 1100px;
      width: 100%;
    }
  }
`;

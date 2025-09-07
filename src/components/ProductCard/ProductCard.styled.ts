"use client";
import styled from "styled-components";
// Estilos dos ccards dos produtos.
export const StylesProductCard = styled.div`
  width: 100%;
  height: 100%;

  .product-card {
    max-width: 310px;
    min-width: 310px;
    height: 460px;
    border: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 10px;
    font-size: 14px;
    cursor: pointer;
    transition: 0.3s ease;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    transform: translateZ(0);
    backface-visibility: hidden;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
    }
  }

  .product-card img {
    width: 100%;
    height: 235px;
    object-fit: cover;
    border-radius: 15px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    transition: inherit;
    display: block;
  }

  .product-category {
    margin-top: 10px;
    padding-inline: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  p span {
    color: yellow;
    text-shadow: 1px 1px 1px #555;
    font-size: 1rem;
  }
  .product-description {
    padding-inline: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .product-info {
    padding-inline: 20px;
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;
  }

  .product-info h3 {
    font-size: 22px;
    font-weight: bold;
    color: #1b9847;
  }

  .btn {
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }
  .btn span {
    position: absolute;

    left: 80px;
  }

  button {
    background-color: black;
    color: white;
    padding: 8px 16px;
    width: 100%;
    max-width: 270px;
    font-size: 16px;
    font-weight: 500;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  button:hover {
    background-color: white;
    color: black;
    border-color: black;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    .product-card {
      max-width: 356px;
      height: 520px;
      font-size: 15.5px;
    }

    .product-card img {
      height: 270px;
    }
    button {
      width: 100%;
      max-width: 314px;
      font-size: 17px;
    }

    .product-category {
      margin-top: 15px;
    }

    .product-description {
      gap: 8px;
    }

    .product-info {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .product-info h3 {
      font-size: 24px;
    }

    .btn button {
      height: 40px;
    }
  }
`;

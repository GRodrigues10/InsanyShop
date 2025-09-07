"use client";
import styled from "styled-components";
//Mobile First
export const StylesProductCard = styled.div`
  width: 100%;
  height: 100%;

  .product-card {
    width: 310px;
    min-width: 310px;
    min-height: 480px;
    border: none;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    border-radius: 20px;
    margin-bottom: 10px;
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

  .product-card p,
  .product-card h3 {
    line-height: 1.45;
  }

  .product-category {
    margin-top: 10px;
    padding-inline: 20px;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
  }

  .product-category p {
    font-size: 0.875rem;
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

  .product-description p {
    font-size: 0.875rem;
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
    font-size: 1.375rem;
    font-weight: bold;
    color: #1b9847;
  }

  .product-info p {
    font-size: 0.875rem;
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
    bottom: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .btn span svg {
    width: 24px;
    height: 24px;
  }

  button {
    background-color: black;
    color: white;
    padding: 0.6rem 1rem;

    width: 100%;
    max-width: 16.875rem;
    font-size: 1rem;
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
    box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
  }

  @media screen and (min-width: 1440px) {
    .product-card {
      width: 356px;
      height: 540px;
    }

    .product-card img {
      height: 270px;
    }
    button {
      width: 100%;
      max-width: 314px;
      font-size: 1rem;
    }

    .product-category {
      margin-top: 15px;
    }

    .product-description {
      gap: 10px;
    }

    .product-info {
      margin-top: 20px;
      margin-bottom: 20px;
    }
    .product-info h3 {
      font-size: 1.5rem;
    }
    .btn span {
      position: absolute;

      left: 100px;
    }
  }
`;

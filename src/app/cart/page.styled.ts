"use client";
import styled from "styled-components";

export const StylesCart = styled.div`
  margin-top: 10px;
  padding: 20px;

  .content-section {
    width: 100%;
    /* display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column; */
  }

  .content-section .cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .btn {
    display: flex;
    gap: 8px;
    align-items: center;
    color: #617480;
    align-self: flex-start;
  }

  .btn span svg {
    border: 1px solid;
    border-radius: 50%;
    padding: 3px;
    width: 90%;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: black;
    }
  }

  .cart-products h1 {
    color: #41414d;
    font-weight: 600;
    font-size: 24px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cart-products p {
    color: #41414d;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (min-width: 530px) {
    .cart-products h1 {
      font-size: 1.7rem;
    }
    .cart-products p {
      font-size: 1.1rem;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .content-section {
      display: flex;
      justify-content: center;
      flex-direction: column;
      width: 100%;
      max-width: 980px;
    }

    .cart-products {
      display: flex;
      flex-direction: column;
    }
    .cart-products h1 {
      align-items: start;
      justify-content: center;
    }
    .cart-products p {
      align-items: center;
      justify-content: center;
    }
  }

  @media screen and (min-width: 992px) {
    /* flex-direction: column; */
    flex-direction: row;
    .cart-products{
      
     
   
    }
    .cart-products h1 {
      font-size: 24px;
      align-self: flex-start;
    }
    

      .cart-products p {
      font-size: 24px;
      align-self: flex-start;
      
    }

   
  
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 20px;
    padding: 30px;
    .content-section {
      max-width: 750px;
    }

    .btn {
      margin-left: 5px;
    }

    .cart-products h1 {
      font-size: 1.8rem;
      display: flex;
      align-items: start;
      justify-content: start;
      margin-left: 5px;
    }
    .cart-products p {
      align-items: start;
      justify-content: start;
      margin-left: 5px;
    }
    .content-section .cards {
      display: flex;
      align-self: center;
      justify-content: center;
      align-items: center;
    }
  }

   @media screen and (min-width: 1440px) {
      gap: 30px;
   }
`;

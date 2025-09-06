"use client";
import styled from "styled-components";

export const StylesCartCards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;


  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .card-product {
    background-color: white;
    border-radius: 10px;
    max-width: 350px;
    max-height: 480px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    will-change: transform;

    &:hover {
      transform: scale(1.01);
      box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15); /* leve destaque no hover */
    }
  }

  .card-product img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    backface-visibility: hidden; /* evita blur temporário */
    transform: translateZ(0); /* força renderização em GPU */
  }

  .text {
    padding: 10px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
  .text svg {
    cursor: pointer;
    color: red;
    transition: 0.4s ease;
    &:hover {
      color: darkred;
    }
  }
  .text h2 {
    font-size: 1.1rem;
    color: #41414d;
  }

  .text .header {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
  }

  .text .footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 20px;
    align-items: center;
    padding: 5px 0px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .text .footer select {
    border: 1px solid;
    width: 70px;
    height: 40px;
    border-radius: 10px;
    padding: 10px;
  }

  @media screen and (min-width: 768px) {
    /* align-items: center;
    justify-content: center; */

    .content-section {
      /* width: 100%;
      max-width: 980px;
      align-items: start; */
    }
    .card-product {
      max-width: 738px;
      max-height: 211px;
      display: flex;
      
    }

    .card-product img {
      width: 256px;
      height: 211px;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 0;
    }

    .card-product .text {
      padding: 25px;
    }
    .card-product .text h2 {
      font-size: 20px;
    }
    .card-product .text p {
      font-size: 12px;
      text-align: justify;
    }

    .card-product .footer p strong {
      font-size: 16px;
    }
  }

  @media screen and (min-width: 992px) {
  .content-section{
    flex-direction: column;
    width: 600px;
  }

  .content-section img{
    flex-direction: column;
    width: 200px;
  }

  }

  @media screen and (min-width: 1200px) {
    /* align-items: center;
    justify-content: center; */

    width: 100%;
  
    
    .content-section {
      width: 100%;
      max-width: 980px;
      align-items: start;
      
    }
    .card-product {
      width: 760px;
      max-height: 231px;
      display: flex;
    }

    .card-product img {
      width: 256px;
      height: 231px;
      border-bottom-left-radius: 10px;
      border-top-right-radius: 0;
    }

    .card-product .text {
      padding: 25px;
    }
    .card-product .text h2 {
      font-size: 22px;
    }
    .card-product .text p {
      font-size: 14px;
      text-align: justify;
    }

    .card-product .footer p strong {
      font-size: 18px;
    }
  }
`;

"use client";
import styled from "styled-components";
// Mobile First
export const StylesHome = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 10px;
    flex-direction: column;
  }

  .not {
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .not p.not-found {
    margin: 0;
    font-size: 1.5rem;
  }

  .loadind-container {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-section .cards {
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .content-section h1 {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section {
      justify-content: center;
      align-items: center;
    }

    .content-section .not-found {
      font-size: 1.7rem;
    }

    .content-section .cards {
      grid-template-columns: repeat(2, 1fr);
    }

    .content-section h1 {
      width: 100%;
      max-width: 970px;
      align-self: center;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: left;
      margin-bottom: 35px;
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 2.1rem;
    }

    .content-section .not-found {
      font-size: 2rem;
      margin-bottom: auto;
    }

    .content-section .cards {
      grid-template-columns: repeat(3, 1fr);
      gap: 5px;
      row-gap: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 40px;
    }
  }

  @media screen and (min-width: 1440px) {
    .content-section h1 {
      max-width: 1110px;
    }
  }
`;

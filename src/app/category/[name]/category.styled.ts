"use client";
import styled from "styled-components";

export const StylesCategory = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  justify-content: center;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    padding: 0px 15px;
    max-width: 1000px;
  }

  .content-section h1 {
    font-size: 2rem;
    margin-bottom: 40px;
    font-weight: bold;
  }

  @media screen and (min-width: 530px) {
    .content-section h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    .content-section h1 {
      font-size: 2.4rem;
      align-self: flex-start;
    }

    .content-section .cards {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media screen and (min-width: 992px) {
    .content-section h1 {
      font-size: 2.6rem;
    }

    .content-section .cards {
      grid-template-columns: repeat(3, 1fr);
      row-gap: 15px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 40px;
    }
  }
`;

"use client";
import styled from "styled-components";
// Mobile First - Construindo primeiro para telas menores.
export const StylesLayout = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    padding: 0px 15px;
    max-width: 1000px;
    flex-direction: column;
  }

  .content-section select {
    border: none;
    background: transparent;
    padding-right: 10px;
    color: #5d5d6d;
  }
  @media screen and (min-width: 530px) {
    .content-section {
      flex-direction: row;
      justify-content: space-between;
      gap: 0px;
    }
  }
`;

"use client";
import styled from "styled-components";
// Mobile First - Construindo primeiro para telas menores.
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

  .loadind-container{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content-section .cards {
    display: grid;
    grid-template-columns: 1fr; //A tela começa com 1 coluna de cards.
    gap: 15px;
  }

  .content-section h1 {
    font-size: 1.8rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 35px;
  }

  @media screen and (min-width: 530px) {
    //Estilos para telas com no mínimo 530px.
    .content-section h1 {
      font-size: 2.2rem;
    }
  }

  @media screen and (min-width: 768px) {
    //Estilos para telas com no mínimo 768px.
    .content-section {
      justify-content: center;
      align-items: center;
    }

    .content-section .cards {
      grid-template-columns: repeat(
        2,
        1fr
      ); //A tela passa a ter 2 colunas de cards.
    }

    .content-section h1 {
      width: 100%;
      max-width: 970px; //Garante alinhamento com os conteúdos da página
      align-self: center;
      font-size: 1.8rem;
      font-weight: bold;
      text-align: left; /* Alinha o título à esquerda */
      margin-bottom: 35px;
      /* Garante que o título comece sem margem */
    }
  }

  @media screen and (min-width: 992px) {
       .content-section h1 {
        font-size: 2.1rem;
       }
    //Estilos para telas com no mínimo 992px
    .content-section .cards {
      grid-template-columns: repeat(
        3,
        1fr
      ); // A tela passa a ter 3 colunas de cards.
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section h1 {
      font-size: 40px;
    }
  }
`;

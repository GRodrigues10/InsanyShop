// Isso é obrigatório
import styled from "styled-components";
// Mobile First - Começando o header para as telas mobile.
export const StylesHeader = styled.header`
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;

  .content-header {
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 15px;
    max-width: 1000px;
    color: #5d5d6d;
  }

  h1 {
    font-size: 1.7rem;
    font-weight: bold;
  }

  .header-actions-desktop {
    //Na versão mobile, esse elemento não aparece.
    display: none;
  }

  .header-actions-mobile {
    button {
      font-size: 1.2rem;
      font-weight: bold;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: 0.4s ease;

      &:hover {
        color: #4a4a4a;
      }
    }
  }

  @media screen and (min-width: 530px) {
    // Versão para telas com largura mínima de 530px.

    h1 {
      font-size: 1.9rem;
    }

    .header-actions-mobile {
      button {
        font-size: 1.4rem;
      }
    }
  }

  @media screen and (min-width: 768px) {
    // Versão para telas com largura mínima de 768px.
    h1 {
      font-size: 2rem;
    }

    .header-actions-mobile {
      display: none;
    }

    .header-actions-desktop {
      display: flex;
      gap: 20px;
      position: relative;
      input {
        padding: 10px;
        border-radius: 8px;
        width: 352px;
        height: 42px;
        border: none;
        background-color: #f0f5ff;
        outline: none;
      }

      .search {
        position: absolute;
        right: 60px;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        transition: color 0.4s ease, transform 0.3s ease; /* cor e posição separadas */
        &:hover {
          color: #4a4a4a;
          transform: translateY(-55%);
        }
      }
    }
    .btn-container {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .btn-container svg {
      background: transparent;
      border: none;
      cursor: pointer;
    }

    .circle {
      position: absolute;
      top: 25px;
      right: -10px;
      width: 17px;
      height: 17px;
      border-radius: 50%;
      background-color: red;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
    }
  }

  @media screen and (min-width: 992px) {
    // Versão para telas com largura mínima de 992px.

    h1 {
      font-size: 40px;
    }
  }
`;

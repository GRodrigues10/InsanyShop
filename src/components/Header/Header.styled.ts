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
    cursor: pointer;
  }

  .header-actions-desktop {
    //Na versão mobile, esse elemento não aparece.
    display: none;
  }
  .mobile-menu {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 250px;
    background-color: white;
    box-shadow: -3px 0 10px rgba(0, 0, 0, 0.2);
    padding: 2rem 1rem;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 200; /* menor que o botão fechar */
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  /* Quando abrir */
  .mobile-menu.open {
    transform: translateX(0);
  }

  /* Input estilizado */
  .mobile-menu input {
    width: 100%;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid #ccc;
    outline: none;
    background-color: #f0f5ff;
    font-size: 12px;
    margin-top: 50px;
  }

  /* Botão de busca: agora fica inline com input */
  .mobile-menu .search {
    /* separação do input */
    cursor: pointer;
    color: #5d5d6d;
    transition: color 0.3s ease;
    background-color: black;
    color: white;
  }

  .input-content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .input-content .btn {
    width: 100%;

    font-size: 1rem;
    background-color: #5d5d6d;
    color: white;
    padding: 5px;
    border-radius: 5px;

    &:hover {
      background-color: #4a4a4a;
      color: white;
    }
  }

  /* Container interno para o carrinho e input juntos */
  .mobile-menu .header-actions-desktop {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  /* Botão fechar acima da sidebar */
  .content-header .close {
    position: relative;
    z-index: 300;
  }
  .btn-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .mobile-menu .btn-cart {
    font-size: 1rem;
    color: white;
    background-color: #00b74a; /* verde forte */
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: background 0.3s ease, color 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .mobile-menu .btn-cart:hover {
    background-color: #009e3d; /* mais fechado no hover */
    color: #f8f9fa;
  }

  .mobile-menu .btn-cart:active {
    background-color: #008531; /* bem forte no active */
    color: #e9ecef;
  }

  /* .mobile-menu .btn-cart span{
  font-size: 1rem;
  color:black;

} */
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
        transition: color 0.4s ease, transform 0.3s ease;
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

  @media screen and (min-width: 1440px) {
    // Versão para telas com largura mínima de 992px.
    .content-header {
      max-width: 1140px;
    }
    h1 {
      font-size: 40px;
    }
  }
`;

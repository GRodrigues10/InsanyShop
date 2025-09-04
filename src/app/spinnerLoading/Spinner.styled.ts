import styled from "styled-components";
// Criei um componente para tela de carregamento.
export const StylesSpinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 150px;

  .circle {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;   
    border-top: 4px solid #5d5d6d; 
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
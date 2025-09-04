import styled from "styled-components";
//Esses estilos basicamente estilizam o spinner de diferentes formas. Na seção inicial fica de um jeito e na seção de detalhes de outro.
interface SpinnerProps {
  fullScreen?: boolean;
}

export const StylesSpinner = styled.div<SpinnerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${(props) => (props.fullScreen ? "80vh" : "150px")};
  width: 100%;

  .circle {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #5d5d6d;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

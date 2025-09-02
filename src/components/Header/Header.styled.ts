import styled from "styled-components";

export const StylesHeader = styled.div`
    width: 100%;
    height: 100px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 10px;


    h1{
        color: #5D5D6D;
        font-size: 1.7rem;
        font-weight: bold;
    }

    .header-actions-desktop{//Na versão mobile, esse elemento não aparece
        display: none;
    }

    .header-actions-mobile{
       button{
        color: #5D5D6D;

        font-size: 1.2rem;
        font-weight: bold;
        background: transparent;
        border: none;
       
    }
    }
`;

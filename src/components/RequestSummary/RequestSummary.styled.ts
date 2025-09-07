import styled from "styled-components";
// Mobile First
export const StylesRequestSummary = styled.div`
  background-color: #f0f5ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;

  .content-section {
    background-color: white;
    height: 700px;
    padding: 15px 25px;
    border-radius: 10px;
    max-width: 352px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  }

  .summary {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    color: #41414d;
  }
  .header-summary h1 {
    font-size: 20px;
    color: #41414d;
    font-weight: 600;
    margin-bottom: 30px;
  }
  .header-summary .total-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
  }

  .header-summary .delivery {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
  }
  hr {
    margin-bottom: 20px;
  }

  .header-summary .total {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .header-summary button {
    background-color: #1b9847;
    color: white;
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: 0.4s ease;

    &:hover {
      background-color: #17803e;
    }
  }

  .footer-summary {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .footer-summary p {
    text-decoration: underline;
    color: #737380;
    cursor: pointer;
    transition: 0.4s ease;
    &:hover {
      color: #36363f;
    }
  }

  @media screen and (min-width: 768px) {
    width: 100%;
  }
  @media screen and (min-width: 992px) {
    width: 40%;
  }
  @media screen and (min-width: 1200px) {
    width: 40%;
    max-width: 352px;
    .content-section {
      width: 100%;
      max-width: 352px;
    }
  }
  .summary {
    width: 100%;
    max-width: 352px;
  }

  @media screen and (min-width: 1440px) {
    margin-bottom: auto;
  }
`;

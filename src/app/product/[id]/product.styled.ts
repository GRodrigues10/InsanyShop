"use client";
import styled from "styled-components";
// Mobile First
export const StylesProduct = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  .content-section {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 20px;
  }

  .content {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rebeccapurple;
  }

  .content-section .details .details-img .btn {
    color: #617480;
    font-size: 14px;
    padding: 10px 0;
    display: flex;
    gap: 10px;
    align-self: flex-start !important;
  }
  .content-section .btn span svg {
    width: 20px;
    cursor: pointer;
    border-radius: 50%;
    border: 1px solid;

    padding: 3px;
    transition: 0.4s ease;
    &:hover {
      color: black;
    }
  }

  .content-section .details {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .content-section img {
  
    border-radius: 5px;
    cursor: pointer;
    transition: 0.4s;
    &:hover {
      transform: scale(1.01);
    }
  }

  .content-section .details .details-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #41414d;
    margin-top: 20px;
  }
  .content-section .details .details-text .part1 p {
    margin-bottom: 10px;
  }
  .content-section .details .details-text .part1 h1 {
    font-size: 1.4rem;
    font-weight: normal;
    margin-bottom: 8px;
  }

  .content-section .details .details-text .part1 h3 {
    font-size: 1.1rem;
    color: #46ab6a;
    font-weight: bold;
  }

  .content-section .details .details-text .part2 {
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .content-section .details .details-text .part2 h3 {
    font-size: 1.1rem;
    font-weight: bold;
    color: #737380;
    margin-bottom: 10px;
  }

  .content-section .details .details-text .part2 p {
    text-align: justify;
    max-width: 448px;
  }

  .content-section .details button {
    background-color: black;
    color: white;
    font-weight: normal;
    padding: 0.5rem 1rem;
    width: 100%;
    font-size: 1rem;
    min-height: 2.5rem;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid transparent;
    cursor: pointer;
    transition: all 0.4s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:hover {
      background-color: white;
      color: black;
      border-color: black;
      box-shadow: 0 0.25rem 0.75rem rgba(0, 0, 0, 0.15);
    }
  }

  button span {
    position: static;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button span svg {
    width: 1.5rem;
    height: 1.5rem;
    position: relative;
    right: 5px;
  }

  /* button span{
    position: absolute;
    left: 150px;
  } */

  @media screen and (min-width: 530px) {
    padding: 20px;
    margin-top: 30px;
  }

  @media screen and (min-width: 768px) {
    .content-section {
      justify-content: center;
    }
    .content-section .details {
      flex-direction: row;
      width: 100%;
      justify-content: center;
      gap: 20px;
    }

    .content-section .details button {
      margin-top: 0px;
    }

    button span {
      left: 120px;
    }

    .content-section .details {
      gap: 40px;
    }
    .content-section .details .details-img .btn {
      position: relative;
      bottom: 20px;
      font-size: 1rem;
    }

    .content-section .details .details-img .btn svg {
      width: 23px;
    }

    .content-section .details .details-text .part1 {
      align-self: flex-start;
      text-align: start;
    }

    .content-section .details .details-text .part2 {
      text-align: start;
    }
    .content-section .details .details-img img {
      position: relative;
      bottom: 15px;
    }
    .content-section .details .details-text {
      height: 370px;

      justify-content: space-between;
    }
  }
  @media screen and (min-width: 992px) {
    .content-section .details {
      gap: 40px;
    }
    .content-section .details .details-img .btn {
      bottom: 20px;
      font-size: 1rem;
    }

    .content-section .details .details-img .btn svg {
      width: 23px;
    }
    button span {
      left: 150px;
    }
    .content-section .details .details-img img {
      bottom: 15px;
      width: 420px;
      height: 400px;
    }
    .content-section .details .details-text {
      height: 390px;
    }
  }

  @media screen and (min-width: 1200px) {
    .content-section .details .details-img .btn {
      position: relative;
      bottom: 30px;
    }
    .content-section .details .details-text {
      text-align: start;

      justify-content: flex-start;
    }
    .content-section .details .details-text .part1 {
      align-self: flex-start;
    }
    .content-section .details .details-text .part1 {
      h3 {
        font-size: 20px;
      }
    }
    .content-section .details .details-img img {
      width: 640px;
      height: 580px;
      position: relative;
      bottom: 20px;
    }
    /* .content-section .details {
    } */
    .content-section .details .details-text {
      display: flex;
      justify-content: space-between;

      height: 560px;
    }
    .content-section .details .details-text .part1 {
      position: relative;
      bottom: 20px;
    }

    .content-section .details .details-text .part1 h1 {
      font-size: 32px;
    }

    .content-section .details .details-text .part2 {
      margin-bottom: 50px;
    }
  }
`;

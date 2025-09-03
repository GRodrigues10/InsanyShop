"use client";

import styled from "styled-components";

export const StylesLayout = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;

  .content-section {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 15px;
    max-width: 1000px;
  }

  .content-section select {
    border: none;
    background: transparent;
    padding-right: 10px;
    color: #5d5d6d;
  }
`;

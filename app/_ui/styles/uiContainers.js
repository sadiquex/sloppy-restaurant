"use client";
import { styled } from "styled-components";

export const MAIN = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  /* border: 2px solid pink; */
  padding: 2px;
  /* height: 100vh; */
  padding-top: 66px; // padding for height of the navbar

  @media (max-width: 480px) {
    /* padding: 66px 8px 0px 8px; */
  }
`;

"use client";
import { styled } from "styled-components";

export const MAIN = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  /* border: 2px solid pink; */
  padding: 2px;
  /* height: 100vh; */
  padding-top: 66px; // padding for height of the navbar
  padding-bottom: 66px;

  @media (max-width: 480px) {
    /* padding: 66px 8px 0px 8px; */
  }
`;

export const BACKDROPCONTAINER = styled.section`
  position: relative;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 60vh;
  display: flex;
  align-items: center;
  z-index: 10;

  &::before {
    // backdrop
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: -1;
  }
`;

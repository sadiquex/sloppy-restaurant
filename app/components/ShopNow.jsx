"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/styles/uiContainers";
import { H1, H2, P } from "../_ui/styles/designSystem/textSystem";
import ShopNowCard from "./ui/ShopNowCard";
import data from "../../data";

const { shopNowItems } = data;

export default function ShopNow() {
  return (
    <ShopNowSection>
      <ShopNowContent>
        <ShopNowTitle>Hot Sales</ShopNowTitle>
        <H1>Today's Special Dishes</H1>
        <CardsContainer>
          {shopNowItems.map((item, i) => (
            <ShopNowCard item={item} key={i} />
          ))}
        </CardsContainer>
      </ShopNowContent>
    </ShopNowSection>
  );
}

const ShopNowSection = styled.section`
  position: relative;
  background-image: url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* height: 100vh; */
  /* width: 100vw; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  z-index: 10;

  &::before {
    // backdrop
    // overlay
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  @media (max-width: 480px) {
    height: auto;
  }
`;

const ShopNowContent = styled(MAIN)`
  /* z-index: 10; */
  /* padding-top: 0; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 66px;

  /* overflow: auto; */
  /* overflow: hidden; */

  @media (max-width: 480px) {
    height: auto;
    max-width: 480px;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

const ShopNowTitle = styled(H2)`
  font-family: var(--font-kaushanScript);
`;

const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  @media (max-width: 480px) {
    height: auto;
    max-width: 100%;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

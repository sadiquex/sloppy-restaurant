"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../_ui/styles/uiContainers";
import { H1, H2, P } from "../_ui/styles/designSystem/textSystem";
import ShopNowCard from "./ui/ShopNowCard";
import data from "../../data";

const { shopNowItems } = data;

export default function ShopNow() {
  return (
    <ShopNowSection>
      <ShopNowContent>
        <H2>Hot Sales</H2>
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

const ShopNowSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=600");

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
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

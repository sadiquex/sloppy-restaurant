"use client";

import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import ShopNowCard from "../ui/ShopNowCard";
import data from "@/data.json";
import {
  CardsContainer,
  ShopNowContent,
  ShopNowSection,
  ShopNowTitle,
} from "./ShopNowStyles";

const { shopNowItems } = data;

export default function ShopNow() {
  return (
    <ShopNowSection>
      <ShopNowContent>
        <H2>Hot Sales</H2>
        <ShopNowTitle>Today&apos;s Special Dishes</ShopNowTitle>
        <CardsContainer>
          {shopNowItems.map((item, i) => (
            <ShopNowCard item={item} key={i} />
          ))}
        </CardsContainer>
      </ShopNowContent>
    </ShopNowSection>
  );
}

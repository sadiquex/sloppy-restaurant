"use client";
import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../../_ui/styles/uiContainers";
import { H1, P } from "@/app/_ui/styles/designSystem/textSystem";
import { BUTTON } from "../ui/Components";

export const ShopNowSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=800");

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const ShopNowContent = styled(MAIN)`
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

export const ShopNowTitle = styled(H1)`
  /* because of the dark colour */
  color: ${(theme) => (theme === "light" ? "#fff" : theme.theme.primary)};
`;

export const CardsContainer = styled.div`
  display: flex;
  gap: 10px;
  overflow-x: auto;

  @media (max-width: 480px) {
    height: auto;
    max-width: 94%;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

// card styles

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 310px;
  /* min-height: 500px; */
  padding-bottom: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .card-btns {
    // 2 buttons
    position: absolute;
    display: flex;
    gap: 6px;
    transform: translateY(10vh);
    opacity: 0;
    transition: transform 0.4s;
  }

  /* when the card is hovered */
  &:hover .card-btns {
    transform: translateY(0);
    opacity: 1;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const Name = styled(P)`
  color: ${(theme) => theme.theme.backgroundColor};
  font-weight: 700;
`;

export const Price = styled(P)`
  color: ${(theme) => theme.theme.secondary};
  font-weight: 700;
`;

export const CardBtn = styled(BUTTON)`
  color: ${(theme) => theme.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: ${(theme) => theme.theme.text};
  }
`;

export const ActionBtn = styled.span`
  border-radius: 50%;
  background: ${(theme) => theme.theme.backgroundColor};
  color: #fff;
  padding: 16px;
  transition: all 0.3s;

  &:hover {
    background: ${(theme) => theme.theme.secondary};
  }
`;

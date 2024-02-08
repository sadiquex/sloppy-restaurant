"use client";

import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";
import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import FoodMenu from "./FoodMenu";

export default function Menu() {
  return (
    <MenuContainer id="menu">
      <MenuContent>
        <H2>Tasty & Spicy Recipes</H2>
        <H1>Discover Our Menu</H1>
        <FoodMenu />
      </MenuContent>
    </MenuContainer>
  );
}

const MenuContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

const MenuContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

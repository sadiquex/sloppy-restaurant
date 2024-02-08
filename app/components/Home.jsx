"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../_ui/styles/uiContainers";
import { H1, P } from "../_ui/styles/designSystem/textSystem";
import { BUTTON } from "./ui/Components";

export default function Home() {
  return (
    <HomeContainer id="home">
      <HomeText>
        <Title>Delicious Food</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et nemo
          ratione eos error sunt. Repellat deserunt veniam est iste a voluptatum
          labore provident voluptatem voluptates quod ipsa in, vitae natus.
        </Description>
        <ButtonsContainer>
          <MenuButton>Our Menu</MenuButton>
          <BUTTON>Book Now</BUTTON>
        </ButtonsContainer>
      </HomeText>
    </HomeContainer>
  );
}

const HomeContainer = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&w=600");
  height: 100vh;

  &::before {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 480px) {
    height: 80vh;
  }
`;

const HomeText = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  z-index: 1;
  padding-top: 0;
`;

const Title = styled(H1)`
  font-family: var(--font-kaushanScript);
  font-size: 80px;
  font-weight: 700;
  white-space: nowrap;

  @media (max-width: 480px) {
    font-size: 3rem;
  }
`;

const Description = styled(P)`
  text-align: center;
  font-family: var(--font-inter), sans-serif;
  width: 50%;
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const MenuButton = styled(BUTTON)`
  background: ${(theme) => theme.theme.primary};
  color: ${(theme) => theme.theme.backgroundColor};
  border: 1px solid ${(theme) => theme.theme.primary};
`;

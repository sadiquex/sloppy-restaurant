"use client";
import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";

export const BlogContainer = styled.section`
  background: hsl(0, 0%, 5%);
  padding-bottom: 30px;
`;

export const BlogContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const BlogCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

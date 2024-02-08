"use client";

import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";
import { P } from "@/app/_ui/styles/designSystem/textSystem";

export const PartnersContainer = styled.section`
  /* background: ${(theme) => theme.theme.backgroundColor}; */
  /* background: hsl(0, 0%, 15%); */
  background: #1b1b1b;
  padding-bottom: 30px;
`;

export const PartnersContent = styled(MAIN)`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: ${(theme) => theme.theme.primary};

  @media (max-width: 480px) {
    /* flex-direction: column; */
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;

  @media (max-width: 480px) {
    overflow: scroll;
    width: 90%;
  }
`;

export const PartnerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

export const Name = styled(P)`
  font-weight: 700;
  letter-spacing: 1px;
  white-space: nowrap;
  /* font-size: 14px; */
`;

export const Logo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${(theme) => theme.theme.primary};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

"use client";
import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";
import { P } from "../../_ui/styles/designSystem/textSystem";

import Image from "next/image";

export const AboutContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

export const AboutContent = styled(MAIN)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AboutText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 30px;
  @media (max-width: 480px) {
    width: 100%;
    align-items: center;
  }
`;

export const AboutImage = styled(Image)`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const StoryBody = styled(P)`
  font-size: 1rem;
  line-height: 1.8;
`;

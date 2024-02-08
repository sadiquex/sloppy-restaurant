"use client";

import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";
import { P } from "../../_ui/styles/designSystem/textSystem";

export const TeamContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

export const TeamContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const StaffCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 20px;
  }
`;

// staff card styles

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  overflow: hidden;

  &:hover .overlay {
    opacity: 1;
  }
`;

export const StaffImage = styled.img`
  width: 210px;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: all 0.3s ease-in-out;
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 10px;

  a {
    color: #fff;
    font-size: 20px;
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    transform: scale(1.2);
  }
`;

export const StaffName = styled(P)`
  font-weight: 700;
`;

export const StaffPosition = styled(P)`
  font-weight: 700;
  font-size: 12px;
  color: ${(theme) => theme.theme.secondary};
`;

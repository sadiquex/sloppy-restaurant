"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../../_ui/styles/uiContainers";
import { motion } from "framer-motion";

export const ReviewSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=800");

  &::before {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const ReviewContent = styled(MAIN)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 66px;

  @media (max-width: 480px) {
    height: auto;
    max-width: 480px;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

export const ReviewCardsContainer = styled.div`
  position: relative;
  width: 80%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const CarouselWrapper = styled.div`
  overflow: hidden;
`;

export const ReviewCardContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: auto;
`;

export const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    @media (max-width: 480px) {
      padding: 10px;
      border-radius: 4px;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${(theme) => theme.theme.primary};
`;

export const Stars = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  color: ${(theme) => theme.theme.secondary};
`;

export const ReviewText = styled.p`
  width: 60%;
  text-align: center;
  color: #fff;
  line-height: 1.2;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Username = styled.p`
  font-weight: 700;
`;

export const UserOccupation = styled.p``;

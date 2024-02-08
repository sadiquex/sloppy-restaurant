"use client";
import styled from "styled-components";
import { MAIN } from "../../_ui/styles/uiContainers";
import { H2 } from "../../_ui/styles/designSystem/textSystem";
import Image from "next/image";
import { motion } from "framer-motion";
import { BUTTON } from "../ui/Components";

export const GalleryContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

export const GalleryContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const GalleryTitle = styled(H2)`
  font-family: var(--font-kaushanScript);
`;

// styles for gallery images

export const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

export const FilterButton = styled(BUTTON)`
  border-radius: 4px;
  padding: 12px 36px;
  background: ${(theme) => theme.theme.primary};
  color: ${(theme) => theme.theme.backgroundColor};
  font-weight: 700;

  border: none;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  &.active {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.secondary};
  }
`;

export const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 20px;
  }

  img {
    width: 100%;
    /* height: auto; */
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

export const FoodImage = styled(motion(Image))`
  /* border: 2px solid red; */
`;

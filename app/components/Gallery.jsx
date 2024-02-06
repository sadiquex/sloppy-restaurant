"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/styles/uiContainers";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import { BUTTON } from "./ui/Components";
import FoodGallery from "./FoodGallery";

export default function Gallery() {
  return (
    <GalleryContainer id="gallery">
      <GalleryContent>
        <GalleryTitle>Gallery</GalleryTitle>
        <H1>Our Gallery</H1>
        <FoodGallery />

        <BUTTON>View All Gallery</BUTTON>
      </GalleryContent>
    </GalleryContainer>
  );
}

const GalleryContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
  /* height: 100vh; */
`;

const GalleryContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const GalleryTitle = styled(H2)`
  font-family: var(--font-kaushanScript);
`;

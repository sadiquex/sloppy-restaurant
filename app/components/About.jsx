"use client";

import styled from "styled-components";
import { H1, H2, P } from "../_ui/styles/designSystem/textSystem";
import { MAIN } from "../_ui/styles/uiContainers";
import { BUTTON } from "./ui/Components";

export default function About() {
  return (
    <AboutContainer id="about">
      <AboutContent>
        <AboutText>
          <H2>Our Story</H2>
          <StoryBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vitae dicta natus ut eligendi rerum deserunt, ad voluptate,
            repellendus eum ducimus dolores sit fugit nesciunt, minima in beatae
            aut enim. Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Quaerat vitae
          </StoryBody>
          <StoryBody>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            magnam distinctio, ad possimus labore quia laborum reprehenderit
            veniam quasi tenetur iste doloremque et natus perspiciatis maiores
            sit mollitia? Accusantium, dolorum.
          </StoryBody>
          <BUTTON>Learn More</BUTTON>
        </AboutText>
        {/* image */}
        <AboutImage
          src="https://cutesolution.com/html/sloppy/sloppy/assets/img/about.png"
          alt=""
        />
      </AboutContent>
    </AboutContainer>
  );
}

const AboutContainer = styled.section`
  /* width: 100vw; */
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

const AboutContent = styled(MAIN)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const AboutText = styled.div`
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

const AboutImage = styled.img`
  @media (max-width: 480px) {
    width: 100%;
  }
`;

const StoryBody = styled(P)`
  font-size: 1rem;
  line-height: 1.8;
`;

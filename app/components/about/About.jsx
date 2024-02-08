import { H2 } from "../../_ui/styles/designSystem/textSystem";

import { BUTTON } from "../ui/Components";
import {
  AboutContainer,
  AboutContent,
  AboutImage,
  AboutText,
  StoryBody,
} from "./AboutStyles";

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
          priority
          width={500}
          height={438}
          src="https://cutesolution.com/html/sloppy/sloppy/assets/img/about.png"
          alt="about image"
        />
      </AboutContent>
    </AboutContainer>
  );
}

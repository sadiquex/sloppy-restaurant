import { BUTTON } from "../ui/Components";
import {
  HomeContainer,
  HomeText,
  Title,
  Description,
  ButtonsContainer,
  MenuButton,
} from "./HomeStyles";

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

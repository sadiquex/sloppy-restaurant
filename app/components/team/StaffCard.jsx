import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import {
  Container,
  StaffImage,
  Overlay,
  SocialIcons,
  StaffName,
  StaffPosition,
} from "./TeamStyles";

export default function StaffCard({ staffData }) {
  const { image, name, position } = staffData;

  return (
    <Container>
      <StaffImage src={image} alt={name} />
      <Overlay className="overlay">
        <SocialIcons>
          <a href="#" target="_blank">
            <FaFacebookF />
          </a>
          <a href="#" target="_blank">
            <FaTwitter />
          </a>
          <a href="#" target="_blank">
            <FaInstagram />
          </a>
        </SocialIcons>
      </Overlay>
      <StaffName>{name}</StaffName>
      <StaffPosition>{position}</StaffPosition>
    </Container>
  );
}

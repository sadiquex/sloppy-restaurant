"use client";

import styled from "styled-components";
import { P } from "../_ui/styles/designSystem/textSystem";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

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

const Container = styled.div`
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

const StaffImage = styled.img`
  width: 210px;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;

  @media (max-width: 480px) {
    width: 80%;
  }
`;

const Overlay = styled.div`
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

const SocialIcons = styled.div`
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

const StaffName = styled(P)`
  font-weight: 700;
`;

const StaffPosition = styled(P)`
  font-weight: 700;
  font-size: 12px;
  color: ${(theme) => theme.theme.secondary};
`;

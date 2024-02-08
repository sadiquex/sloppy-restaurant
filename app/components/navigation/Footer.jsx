"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../../_ui/styles/uiContainers";
import { P } from "../../_ui/styles/designSystem/textSystem";

export default function Footer() {
  return (
    <Container>
      <FooterContent>
        <P>Sloppy &copy; 2024 - Abubakar Sadique</P>
        <P>Terms & Conditions | Privacy Policy</P>
      </FooterContent>
    </Container>
  );
}

const Container = styled(BACKDROPCONTAINER)`
  min-height: 10vh;
  background: hsl(0, 0%, 5%);
`;

const FooterContent = styled(MAIN)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 20px;
    /* width: 90%; */
  }
`;

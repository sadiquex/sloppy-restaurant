"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../_ui/styles/uiContainers";
import { H1, H2, P } from "../_ui/styles/designSystem/textSystem";
import { BUTTON } from "./ui/Components";
import { IoPaperPlane } from "react-icons/io5";

export default function Contact() {
  return (
    <ContactSection id="contact">
      <ContactContent>
        <H2>Get In Touch</H2>
        <H1>Contact Us</H1>
        <ContactsDetails>
          <ContactInfo>
            <ContactTitle>Contact Info</ContactTitle>
            <p>Sloppy Restaurant, 20th Ave, Canada</p>
            <p>sloppy@emailaddress.com</p>
            <p>+233 50 307 2746</p>
          </ContactInfo>
          {/* opening hours */}
          <ContactInfo>
            <ContactTitle>Opening Hours</ContactTitle>
            <p>Sun - Fri ----- 10:00am - 11:30pm</p>
            <p>Saturday ----- Closed</p>
          </ContactInfo>

          {/* newsletter */}
          <ContactInfo>
            <ContactTitle>Newsletter</ContactTitle>
            <EmailInput type="email" placeholder="Your email..." />
            <SubscribeButton>
              Subscribe
              <IoPaperPlane />
            </SubscribeButton>
          </ContactInfo>
        </ContactsDetails>
      </ContactContent>
    </ContactSection>
  );
}

const ContactSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=600");

  &::before {
    background-color: rgba(0, 0, 0, 0.8);
  }
`;

const ContactContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  color: #fff;
  /* padding-bottom: 40px; */
`;

const ContactsDetails = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
    gap: 30px;
    flex-direction: column;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

const ContactTitle = styled(P)`
  font-weight: 700;
`;

const EmailInput = styled.input`
  color: ${(theme) => theme.theme.primary};
  font-size: 16px;
  background: transparent;
  padding: 14px 30px;
  border: 1px solid ${(theme) => theme.theme.primary};
  border-left: 5px solid ${(theme) => theme.theme.secondary};
  outline: none;
  border-radius: 4px;
`;

const SubscribeButton = styled(BUTTON)`
  border-radius: 4px;
  display: flex;
  gap: 4px;
  justify-content: center;
  font-weight: bold;
  align-items: center;
`;

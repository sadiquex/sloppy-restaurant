import { H1, H2, P } from "../../_ui/styles/designSystem/textSystem";
import { IoPaperPlane } from "react-icons/io5";
import {
  ContactContent,
  ContactInfo,
  ContactSection,
  ContactTitle,
  ContactsDetails,
  EmailInput,
  SubscribeButton,
} from "./ContactStyles";

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

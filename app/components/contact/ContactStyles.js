"use client";
import styled from "styled-components";

import { BACKDROPCONTAINER, MAIN } from "../../_ui/styles/uiContainers";
import { BUTTON } from "../ui/Components";
import { P } from "../../_ui/styles/designSystem/textSystem";

export const ContactSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/15592755/pexels-photo-15592755/free-photo-of-photo-of-a-room-with-chinese-lanterns.jpeg?auto=compress&cs=tinysrgb&w=800");

  &::before {
    /* background-color: rgba(0, 0, 0, 0.7); */
  }
`;

export const ContactContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  color: #fff;
  /* padding-bottom: 40px; */
`;

export const ContactsDetails = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100%;
    gap: 30px;
    flex-direction: column;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (max-width: 480px) {
    align-items: center;
  }
`;

export const ContactTitle = styled(P)`
  font-weight: 700;
`;

export const EmailInput = styled.input`
  color: ${(theme) => theme.theme.primary};
  font-size: 16px;
  background: transparent;
  padding: 14px 30px;
  border: 1px solid ${(theme) => theme.theme.primary};
  border-left: 5px solid ${(theme) => theme.theme.secondary};
  outline: none;
  border-radius: 4px;
`;

export const SubscribeButton = styled(BUTTON)`
  border-radius: 4px;
  display: flex;
  gap: 4px;
  justify-content: center;
  font-weight: bold;
  align-items: center;
`;

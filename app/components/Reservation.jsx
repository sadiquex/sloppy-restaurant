"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../_ui/styles/uiContainers";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import { BUTTON } from "./ui/Components";

export default function Reservation() {
  return (
    <ReservationSection>
      <ReservationContent>
        <H2>Reservation</H2>
        <H1>Book a Table Now !</H1>
        <BUTTON>Book Now</BUTTON>
      </ReservationContent>
    </ReservationSection>
  );
}

const ReservationSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/10875186/pexels-photo-10875186.jpeg?auto=compress&cs=tinysrgb&w=600");

  &::before {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ReservationContent = styled(MAIN)`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 66px;

  @media (max-width: 480px) {
    height: auto;
    max-width: 480px;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

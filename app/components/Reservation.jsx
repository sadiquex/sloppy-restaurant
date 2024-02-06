"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/styles/uiContainers";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import { BUTTON } from "./ui/Components";

export default function Reservation() {
  return (
    <ReservationSection>
      <ReservationContent>
        <ReservationTitle>Reservation</ReservationTitle>
        <H1>Book a Table Now !</H1>
        <BUTTON>Book Now</BUTTON>
      </ReservationContent>
    </ReservationSection>
  );
}

const ReservationSection = styled.section`
  position: relative;
  background-image: url("https://images.pexels.com/photos/10875186/pexels-photo-10875186.jpeg?auto=compress&cs=tinysrgb&w=600");
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 40vh;
  /* width: 100vw; */
  display: flex;
  align-items: center;
  /* justify-content: center; */
  z-index: 10;

  &::before {
    // backdrop
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  @media (max-width: 480px) {
    /* height: auto; */
  }
`;

const ReservationContent = styled(MAIN)`
  /* z-index: 10; */
  /* padding-top: 0; */
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  padding-bottom: 66px;

  /* overflow: auto; */
  /* overflow: hidden; */

  @media (max-width: 480px) {
    height: auto;
    max-width: 480px;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

const ReservationTitle = styled(H2)`
  font-family: var(--font-kaushanScript);
`;

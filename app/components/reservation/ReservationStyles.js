"use client";

import styled from "styled-components";
import { BACKDROPCONTAINER, MAIN } from "../../_ui/styles/uiContainers";

export const ReservationSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/10875186/pexels-photo-10875186.jpeg?auto=compress&cs=tinysrgb&w=800 ");

  &::before {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;

export const ReservationContent = styled(MAIN)`
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

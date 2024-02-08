"use client";

import styled from "styled-components";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import { MAIN } from "../_ui/styles/uiContainers";
import StaffCard from "./StaffCard";
import data from "../../data.json";

export default function Team() {
  const { staffData } = data;

  return (
    <TeamContainer id="team">
      <TeamContent>
        <H2>Expert Chefs</H2>
        <H1>Our Team Members</H1>
        <StaffCardContainer>
          {staffData.map((staff, i) => (
            <StaffCard staffData={staff} key={i} />
          ))}
        </StaffCardContainer>
      </TeamContent>
    </TeamContainer>
  );
}

const TeamContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
  /* height: 100vh; */
`;

const TeamContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const StaffCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;
    gap: 20px;
  }
`;

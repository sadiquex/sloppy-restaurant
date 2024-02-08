import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import StaffCard from "./StaffCard";
import data from "@/data.json";
import { StaffCardContainer, TeamContainer, TeamContent } from "./TeamStyles";

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

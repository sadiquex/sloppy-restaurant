"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/styles/uiContainers";
import { H2, P } from "../_ui/styles/designSystem/textSystem";
import data from "../../data.json";

export default function Partners() {
  const { partners } = data;

  return (
    <PartnersContainer>
      <PartnersContent>
        {/* <H2>Our Partners</H2> */}
        {partners.map((partner, i) => (
          <PartnerCard key={i}>
            <Name>{partner.name}</Name>
            <Logo>
              <img src={partner.logo} alt={partner.name} />
            </Logo>
          </PartnerCard>
        ))}
      </PartnersContent>
    </PartnersContainer>
  );
}

const PartnersContainer = styled.section`
  background: ${(theme) => theme.theme.backgroundColor};
  padding-bottom: 30px;
`;

const PartnersContent = styled(MAIN)`
  display: flex;
  justify-content: center;
  gap: 20px;
  color: ${(theme) => theme.theme.primary};
  align-items: center;

  @media (max-width: 480px) {
    flex-direction: column;
  }
`;

const PartnerCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;

const Name = styled(P)`
  font-weight: 700;
  letter-spacing: 1px;
  /* font-size: 14px; */
`;

const Logo = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

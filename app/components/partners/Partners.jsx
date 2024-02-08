import { H2 } from "../../_ui/styles/designSystem/textSystem";
import data from "@/data.json";
import Image from "next/image";
import {
  PartnersContainer,
  PartnersContent,
  CardsContainer,
  PartnerCard,
  Name,
  Logo,
} from "./PartnersStyles";

export default function Partners() {
  const { partners } = data;

  return (
    <PartnersContainer>
      <PartnersContent>
        <H2>Our Partners</H2>
        <CardsContainer>
          {partners.map((partner, i) => (
            <PartnerCard key={i}>
              <Name>{partner.name}</Name>
              <Logo>
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  height={100}
                  width={100}
                  priority
                />
              </Logo>
            </PartnerCard>
          ))}
        </CardsContainer>
      </PartnersContent>
    </PartnersContainer>
  );
}

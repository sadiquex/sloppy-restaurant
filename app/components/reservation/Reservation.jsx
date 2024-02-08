import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import { BUTTON } from "../ui/Components";
import { ReservationContent, ReservationSection } from "./ReservationStyles";

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

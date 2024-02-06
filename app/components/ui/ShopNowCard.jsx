import { P } from "@/app/_ui/styles/designSystem/textSystem";
import styled from "styled-components";
import { BUTTON } from "./Components";
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";

export default function ShopNowCard({ item }) {
  return (
    <Container>
      <img src={item.image} alt="product" />
      <Description>
        <Name>{item.name}</Name>
        <Price>{item.price}</Price>
        <CardBtn>
          <span>
            <FaCartShopping />
          </span>
          Order Now
        </CardBtn>
      </Description>
      <div className="card-btns">
        <ActionBtn>
          <MdOutlineFavorite />
        </ActionBtn>
        <ActionBtn>
          <FaCartShopping />
        </ActionBtn>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 310px;
  /* min-height: 500px; */
  padding-bottom: 20px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  .card-btns {
    // 2 buttons
    position: absolute;
    display: flex;
    gap: 6px;
    transform: translateY(10vh);
    opacity: 0;
    transition: transform 0.4s;
  }

  /* when the card is hovered */
  &:hover .card-btns {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const Name = styled(P)`
  color: ${(theme) => theme.theme.backgroundColor};
  font-weight: 700;
`;

const Price = styled(P)`
  color: ${(theme) => theme.theme.secondary};
  font-weight: 700;
`;

const CardBtn = styled(BUTTON)`
  color: ${(theme) => theme.theme.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  &:hover {
    color: ${(theme) => theme.theme.text};
  }
`;

const ActionBtn = styled.span`
  border-radius: 50%;
  background: ${(theme) => theme.theme.backgroundColor};
  color: #fff;
  padding: 16px;
  transition: all 0.3s;

  &:hover {
    background: ${(theme) => theme.theme.secondary};
  }
`;

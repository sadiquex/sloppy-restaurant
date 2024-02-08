import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineFavorite } from "react-icons/md";
import Image from "next/image";
import {
  Description,
  Name,
  Price,
  CardBtn,
  ActionBtn,
  Container,
} from "../shop-now/ShopNowStyles";

export default function ShopNowCard({ item }) {
  return (
    <Container>
      <Image
        src={item.image}
        alt={item.name}
        width={300}
        height={250}
        priority
        // layout="fixed"
      />
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

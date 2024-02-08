import Image from "next/image";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import {
  Container,
  Stars,
  ReviewText,
  ProfileImage,
  Username,
  UserOccupation,
} from "./ReviewsStyles";

export default function ReviewCard({ content }) {
  const { rating, message, name, profileImage, occupation } = content;

  // function to show stars depending on rating
  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const emptyStars = Math.floor(5 - rating);

    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={`filled-star-${i}`} />);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-star-${i}`} />);
    }

    return stars;
  };

  return (
    <Container>
      <Stars>{renderStars(rating)}</Stars>
      <ReviewText>{message}</ReviewText>
      <ProfileImage>
        <Image
          src={profileImage}
          width={100}
          height={100}
          alt={name}
          priority
        />
      </ProfileImage>
      <Username>{name}</Username>
      <UserOccupation>{occupation}</UserOccupation>
    </Container>
  );
}

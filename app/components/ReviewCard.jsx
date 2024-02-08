"use client";

import { FaStarHalfAlt, FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

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
        <img src={profileImage} />
      </ProfileImage>
      <Username>{name}</Username>
      <UserOccupation>{occupation}</UserOccupation>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  color: ${(theme) => theme.theme.primary};
`;

const Stars = styled.div`
  display: flex;
  gap: 8px;
  font-size: 20px;
  color: ${(theme) => theme.theme.secondary};
`;

const ReviewText = styled.p`
  width: 60%;
  text-align: center;
  color: #fff;
  line-height: 1.2;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const ProfileImage = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 5px solid #fff;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Username = styled.p`
  font-weight: 700;
`;

const UserOccupation = styled.p``;

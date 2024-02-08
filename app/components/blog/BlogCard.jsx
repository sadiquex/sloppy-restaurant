"use client";

import styled from "styled-components";
import { P } from "../../_ui/styles/designSystem/textSystem";
import Image from "next/image";

export default function BlogCard({ blog }) {
  const { title, image, content, date } = blog;

  return (
    <Container>
      <BlogImageContainer>
        <Image src={image} alt={title} width={220} height={100} priority />
      </BlogImageContainer>
      <BlogText>
        <BlogTitle className="blog-title">{title}</BlogTitle>
        <BlogContent>{content}</BlogContent>
        <DateAndReadMore>
          <Date>{date}</Date>
          <ReadMore>Read More</ReadMore>
        </DateAndReadMore>
      </BlogText>
    </Container>
  );
}

const Container = styled.div`
  width: 300px;
  background: hsl(0, 0%, 15%);
  /* background: ${(theme) => theme.theme.backgroundColor}; */
  color: ${(theme) => theme.theme.primary};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    img {
      transform: rotate(4deg) scale(1.1);
    }
    .blog-title {
      color: ${(theme) => theme.theme.secondary};
      text-decoration: underline;
    }
  }
`;

const BlogImageContainer = styled.div`
  overflow: hidden;
  flex: 1;

  img {
    height: 220px;
    width: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }
`;

const BlogText = styled.div`
  flex: 1;
  padding: 16px;
  display: flex;
  gap: 12px;
  flex-direction: column;
  max-height: 200px;
  text-overflow: ellipsis;

  @media (max-width: 480px) {
    gap: 20px;
  }
`;

const BlogTitle = styled(P)`
  font-size: 20px;
  transition: all 0.5s ease;
  font-weight: 600;
`;

const BlogContent = styled(P)`
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`;

const DateAndReadMore = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const Date = styled.p``;
const ReadMore = styled.p`
  cursor: pointer;

  &:hover {
    color: ${(theme) => theme.theme.secondary};
  }
`;

"use client";

import styled from "styled-components";
import { MAIN } from "../_ui/styles/uiContainers";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import BlogCard from "./BlogCard";
import { BUTTON } from "./ui/Components";
import data from "../../data.json";

export default function Blog() {
  const { blogsData } = data;

  return (
    <BlogContainer id="blog">
      <BlogContent>
        <H2>Latest News at Sloppy</H2>
        <H1>Our Blog and Events</H1>
        <BlogCardsContainer>
          {blogsData.map((blog, i) => (
            <BlogCard blog={blog} key={i} />
          ))}
        </BlogCardsContainer>
        <BUTTON>View More Blogs</BUTTON>
      </BlogContent>
    </BlogContainer>
  );
}

const BlogContainer = styled.section`
  /* background: ${(theme) => theme.theme.backgroundColor}; */
  background: hsl(0, 0%, 5%);
  padding-bottom: 30px;
`;

const BlogContent = styled(MAIN)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const BlogCardsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;

  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

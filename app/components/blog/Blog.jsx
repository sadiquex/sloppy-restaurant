import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import { BUTTON } from "../ui/Components";
import data from "@/data.json";
import BlogCard from "./BlogCard";
import { BlogCardsContainer, BlogContainer, BlogContent } from "./BlogStyles";

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

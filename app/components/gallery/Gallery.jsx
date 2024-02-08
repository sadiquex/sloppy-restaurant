import { H1 } from "../../_ui/styles/designSystem/textSystem";
import { BUTTON } from "../ui/Components";
import FoodGallery from "./FoodGallery";
import {
  GalleryContainer,
  GalleryContent,
  GalleryTitle,
} from "./GalleryStyles";

export default function Gallery() {
  return (
    <GalleryContainer id="gallery">
      <GalleryContent>
        <GalleryTitle>Gallery</GalleryTitle>
        <H1>Our Gallery</H1>
        <FoodGallery />

        <BUTTON>View All Gallery</BUTTON>
      </GalleryContent>
    </GalleryContainer>
  );
}

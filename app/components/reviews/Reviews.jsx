"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { H1, H2 } from "../../_ui/styles/designSystem/textSystem";
import ReviewCard from "./ReviewCard";
import { BUTTON } from "../ui/Components";
import data from "@/data.json";
import {
  ReviewSection,
  ReviewContent,
  ReviewCardsContainer,
  CarouselWrapper,
  ReviewCardContainer,
  CarouselControls,
} from "./ReviewsStyles";

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const { reviews } = data;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
    setDirection(1); // Set direction to 1 for next
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
    setDirection(-1); // Set direction to -1 for previous
  };

  return (
    <ReviewSection id="reviews">
      <ReviewContent>
        <H2>Testimonials</H2>
        <H1>Client Feedback</H1>
        <ReviewCardsContainer>
          <CarouselWrapper>
            <AnimatePresence initial={false} custom={currentIndex} mode="wait">
              <ReviewCardContainer
                key={currentIndex}
                custom={currentIndex}
                initial={{ opacity: 0, x: direction === 1 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction === 1 ? -100 : 100 }}
                transition={{ duration: 0.5 }}
              >
                {/* <ReviewCard /> */}
                <ReviewCard content={reviews[currentIndex]} />
              </ReviewCardContainer>
            </AnimatePresence>
          </CarouselWrapper>
          <CarouselControls>
            <BUTTON onClick={prevSlide}>Previous</BUTTON>
            <BUTTON onClick={nextSlide}>Next</BUTTON>
          </CarouselControls>
        </ReviewCardsContainer>
      </ReviewContent>
    </ReviewSection>
  );
}

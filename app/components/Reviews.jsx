"use client";

import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BACKDROPCONTAINER, MAIN } from "../_ui/styles/uiContainers";
import { H1, H2 } from "../_ui/styles/designSystem/textSystem";
import ReviewCard from "./ReviewCard";
import { BUTTON } from "./ui/Components";
import data from "../../data.json";

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

const ReviewSection = styled(BACKDROPCONTAINER)`
  background-image: url("https://images.pexels.com/photos/744780/pexels-photo-744780.jpeg?auto=compress&cs=tinysrgb&w=600");

  &::before {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

const ReviewContent = styled(MAIN)`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
  padding-bottom: 66px;

  @media (max-width: 480px) {
    height: auto;
    max-width: 480px;
    padding: 20px 10px;
    overflow-x: scroll;
  }
`;

const ReviewCardsContainer = styled.div`
  position: relative;
  width: 80%;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const CarouselWrapper = styled.div`
  overflow: hidden;
`;

const ReviewCardContainer = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  height: auto;
`;

const CarouselControls = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;

  button {
    @media (max-width: 480px) {
      padding: 10px;
      border-radius: 4px;
    }
  }
`;

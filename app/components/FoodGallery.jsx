"use client";

import { useState } from "react";
import { MAIN } from "../_ui/styles/uiContainers";
import data from "../../data";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { BUTTON } from "./ui/Components";

export default function FoodGallery() {
  const { foodImages } = data;

  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <MAIN>
      <FilterButtons>
        {["All", "Breakfast", "Lunch", "Dessert"].map((category, index) => (
          <FilterButton
            key={index}
            onClick={() => handleCategoryChange(category.toLowerCase())}
            className={
              selectedCategory === category.toLowerCase() ? "active" : ""
            }
          >
            {category}
          </FilterButton>
        ))}
      </FilterButtons>

      {/* AnimatePresence to animate entering and leaving */}
      <AnimatePresence>
        <ImageGrid>
          {foodImages
            .filter(
              (item) =>
                selectedCategory === "all" || item.category === selectedCategory
            )
            .map((item, index) => (
              <motion.img
                src={item.image}
                alt={item.name}
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                layout={{}}
              />
            ))}
        </ImageGrid>
      </AnimatePresence>
    </MAIN>
  );
}

const FilterButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  gap: 20px;
  margin-bottom: 20px;
`;

const FilterButton = styled(BUTTON)`
  border-radius: 4px;
  padding: 12px 36px;
  background: ${(theme) => theme.theme.primary};
  color: ${(theme) => theme.theme.backgroundColor};
  font-weight: 700;

  border: none;
  cursor: pointer;
  font-size: 16px;
  outline: none;

  &.active {
    color: ${(props) => props.theme.primary};
    background: ${(props) => props.theme.secondary};
  }
`;

const ImageGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 0px 20px;
  }

  img {
    width: 100%;
    /* height: auto; */
    height: 300px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

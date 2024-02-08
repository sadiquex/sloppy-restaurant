"use client";

import { useState } from "react";
import { MAIN } from "../../_ui/styles/uiContainers";
import data from "@/data";
import { AnimatePresence } from "framer-motion";
import {
  FilterButton,
  FilterButtons,
  FoodImage,
  ImageGrid,
} from "./GalleryStyles";

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
              <FoodImage
                src={item.image}
                alt={`image ${index}`}
                priority
                key={index}
                width={800}
                height={800}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.04 }}
                // layout={{}}
              />
            ))}
        </ImageGrid>
      </AnimatePresence>
    </MAIN>
  );
}

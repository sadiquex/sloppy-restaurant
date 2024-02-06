"use client";

import React, { useState } from "react";
import data from "../../data";
import styled from "styled-components";
import { P } from "../_ui/styles/designSystem/textSystem";

export default function FoodMenu() {
  const [selectedCategory, setSelectedCategory] = useState("starter");
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const { menuData } = data;

  return (
    <MenuContainer>
      <CategoryBtns>
        {Object.keys(menuData).map((category, index) => (
          <React.Fragment key={category}>
            <button
              onClick={() => handleCategoryChange(category)}
              // active={selectedCategory === category}
              className={selectedCategory === category ? "active" : ""}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
            {index !== Object.keys(menuData).length - 1 && <Divider />}
          </React.Fragment>
        ))}
      </CategoryBtns>

      <Dishes>
        {menuData[selectedCategory].items.map((item, index) => (
          <Dish key={index}>
            <NamePrice>
              <Name>{item.name}</Name>
              <Price>{item.price}</Price>
            </NamePrice>
            <span>{item.description}</span>
            <HorizontalLine />
          </Dish>
        ))}
      </Dishes>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  width: 100%;
  color: ${(theme) => theme.theme.primary};
`;

const CategoryBtns = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: ${(theme) => theme.theme.primary};
    font-size: 16px;
    padding: 5px 10px;
    outline: none;
    font-weight: 700;
    font-size: 20px;

    &:hover {
      color: ${(theme) => theme.theme.secondary};
    }
  }

  .active {
    color: ${(theme) => theme.theme.secondary};
  }
`;

const Dishes = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  flex-wrap: wrap;
  padding: 20px 0;

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px 0;
  }
`;

const Dish = styled.div`
  min-height: 50px;
  width: 90%;
  margin: 0 auto;
`;

const NamePrice = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Name = styled.p`
  font-weight: 700;
`;

const Price = styled(P)`
  color: ${(theme) => theme.theme.secondary};
`;

const HorizontalLine = styled.hr`
  border: 0;
  margin: 16px 0;
  height: 1px;
  max-width: 80%;
  background: ${(theme) => theme.theme.primary};

  @media (max-width: 480px) {
    margin: 16px auto;
    max-width: 100%;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 20px; /* Adjust height as needed */
  margin: 0 10px; /* Adjust margin as needed */
  background: ${(theme) => theme.theme.primary};
`;

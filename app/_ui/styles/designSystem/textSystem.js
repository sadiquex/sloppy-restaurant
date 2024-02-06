"use client";
/* 
-------------
This file defines all the different UI text styles
*/

import { styled } from "styled-components";
import { motion } from "framer-motion";

// Titles
export const H1 = styled(motion.h1)`
  font-size: 2.8rem;
  font-weight: 700;
  font-family: var(--font-inter);
  color: ${(theme) => theme.theme.text};
  @media (max-width: 480px) {
    font-size: 3rem;
    text-align: center;
  }
`;
export const H2 = styled(motion.h2)`
  font-size: 2.25rem;
  font-weight: 700;
  font-family: var(--font-kaushanScript);
  color: ${(theme) => theme.theme.secondary};
  @media (max-width: 480px) {
    font-size: 1.9rem;
  }
`;

// Paragraphs & Captions
export const P = styled(motion.p)`
  font-family: var(--font-inter), sans-serif;
  font-size: 1.25rem;
  line-height: 1.4;
  color: ${(theme) => theme.theme.text};
  @media (max-width: 480px) {
    font-size: 1.1rem;
    text-align: center;
  }
`;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Hero = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 90vh;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  letter-spacing: 0.2em;
  margin-bottom: 1.2rem;
`;

const Subtitle = styled(motion.h2)`
  font-size: 1.7rem;
  font-weight: 400;
  margin-bottom: 2rem;
  color: #c1c1c1;
`;

const CTA = styled(motion.button)`
  background: #ff416c;
  color: #fff;
  padding: 1.2rem 2.8rem;
  border: none;
  border-radius: 32px;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  box-shadow: 0 4px 24px #ff416c33;
  transition: background 0.2s;
  &:hover {
    background: #ff4b2b;
  }
`;

function Landing() {
  return (
    <Hero>
      <Title
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        DOMINE
      </Title>
      <Subtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
      >
        Elevate Your Style
      </Subtitle>
      <CTA
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6 }}
        whileHover={{ scale: 1.07 }}
      >
        Shop Now
      </CTA>
    </Hero>
  );
}

export default Landing;
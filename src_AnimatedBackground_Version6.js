import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styled from "styled-components";

const Background = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 120vh;
  width: 100vw;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

function AnimatedBackground() {
  const { scrollY } = useScroll();
  // Create a parallax effect for circles
  const y1 = useTransform(scrollY, [0, 500], [0, 250]);
  const y2 = useTransform(scrollY, [0, 500], [0, 120]);
  const scale1 = useTransform(scrollY, [0, 800], [1, 1.6]);
  const scale2 = useTransform(scrollY, [0, 800], [1, 1.2]);
  const opacity = useTransform(scrollY, [0, 600], [0.45, 0.1]);
  
  return (
    <Background>
      <motion.div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ff416c88 0%, #18181a00 80%)",
          y: y1,
          scale: scale1,
          opacity,
          filter: "blur(10px)"
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "40vh",
          right: "-140px",
          width: 360,
          height: 360,
          borderRadius: "50%",
          background: "radial-gradient(circle, #ff4b2b77 0%, #18181a00 80%)",
          y: y2,
          scale: scale2,
          opacity,
          filter: "blur(8px)"
        }}
      />
    </Background>
  );
}

export default AnimatedBackground;
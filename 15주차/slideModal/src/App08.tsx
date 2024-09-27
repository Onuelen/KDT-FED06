import { useRef, useEffect, useState } from "react";
import {
  delay,
  motion,
  useMotionValue,
  useTransform,
  useScroll,
  AnimatePresence,
} from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";
import { style } from "framer-motion/client";

const GlobalStyles = createGlobalStyle`
  ${reset} /* 크로스 브라우징 대처 */
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');
  * {
    margin:0;
    padding:0;
    box-sizing:border-box;
  }

  body {
font-family:"Source Sans 3", sans-serif;
background:linear-gradient(135deg, #a2ffb1, #3d35a7)
  }

  ul,li {
    list-style:none;
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 200px;
`;

const Box = styled(motion.div)`
  width: 400px;
  height: 400px;
  background: #fff;
  border-radius: 50px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled(motion.div)`
  width: 100px;
  height: 100px;
  background: #00a5ff;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
`;

const App08 = () => {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((prev) => !prev);
  };
  return (
    <>
      <GlobalStyles />
      <Wrapper onClick={toggleClicked}>
        {/* <Box
          style={{
            justifyContent: clicked ? "ceneter" : "flex-start",
            alignItems: clicked ? "center" : "flex-start",
          }}
        >
          <Circle />
        </Box> */}
        <Box>{clicked ? <Circle layoutId="circle" /> : null} </Box>
        <Box>{!clicked ? <Circle layoutId="circle" /> : null} </Box>
      </Wrapper>
    </>
  );
};

export default App08;

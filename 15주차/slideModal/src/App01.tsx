import { motion } from "framer-motion";
import { createGlobalStyle, styled } from "styled-components";
import reset from "styled-reset";

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
background:linear-gradient(135deg, #e09, #d0e)
  }

  ul,li {
    list-style:none;
  }

  a {
    text-decoration:none;
    color:inherit;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #3effe575;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

const Circle = styled(motion.div)`
  background: #ffffff;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  place-self: center;
`;

const boxVariants = {
  start: {
    opacity: 0,
    scale: 0.5,
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      type: "spring",
      bounce: 0.5,
      delay: 0.5,
      staggerChildren: 0.5,
      delayChildren: 0.5,
    },
  },
};

const circleVariants = {
  start: {
    opacity: 0,
  },
  end: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.8,
      duration: 5,
    },
  },
};

const App01 = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Box variants={boxVariants} initial={"start"} animate="end">
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
          <Circle variants={circleVariants} />
        </Box>
      </Wrapper>
    </>
  );
};

export default App01;

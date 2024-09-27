import { useRef } from "react";
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

const BiggerBox = styled.div`
  width: 600px;
  height: 600px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 30px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  background: #ffffffdd;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.863);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { borderRadius: "100px" },
};

const App03 = () => {
  const biggerBoxRef = useRef<HTMLDivElement>(null);
  console.log(biggerBoxRef);

  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <BiggerBox ref={biggerBoxRef}>
          <Box
            drag
            dragSnapToOrigin
            dragElastic={3}
            dragConstraints={biggerBoxRef}
            variants={boxVariants}
            whileHover="hover"
            whileTap="click"
          />
        </BiggerBox>
      </Wrapper>
    </>
  );
};

export default App03;

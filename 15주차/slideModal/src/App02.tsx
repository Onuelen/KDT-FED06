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
  background: #26ff6fdd;
  border-radius: 30px;
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.863);
`;

const boxVariants = {
  hover: { scale: 2, rotateZ: 90 },
  click: { borderRadius: "100px" },
  drag: { backgroundColor: "rgb(32, 255, 125)", transition: 1 },
};

const App02 = () => {
  return (
    <>
      <GlobalStyles />
      <Wrapper>
        <Box
          drag
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
          whileDrag="drag"
        />
      </Wrapper>
    </>
  );
};

export default App02;

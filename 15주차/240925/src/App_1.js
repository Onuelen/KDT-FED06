import "./App.css";
import styled, { css } from "styled-components";

const baseShadow = css`
  box-shadow: ${({ color }) => `0 10px 6px ${color || "red"}`};
`;

const font = ({ color, size, family }) => `
color: ${color || "red"};
font-size: ${size || "1rem"};
font-family: ${family || "serif"}
`;

const Container = styled.div`
  font-size: 2rem;
  width: 50%;
  background: #ccc;
  margin: 0 auto;
  padding: 10px 20px;
  ${baseShadow}
  ${font({ color: "green", size: "2rem", family: "sans-serif" })}
`;

function App() {
  return (
    <div className="App">
      <Container color="purple">Styled components</Container>
    </div>
  );
}

export default App;

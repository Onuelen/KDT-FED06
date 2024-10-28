import React, { useState } from "react";
import styled from "styled-components";
import DataView from "./components/DataView";
import Inputcontainer from "./components/Inputcontainer";
import { ToDoListContextProvider } from "./contexts/ToDoContext";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #eee;
`;

const App = () => {
  return (
    <Container>
      <ToDoListContextProvider>
        <DataView />
        <Inputcontainer />
      </ToDoListContextProvider>
    </Container>
  );
};

export default App;

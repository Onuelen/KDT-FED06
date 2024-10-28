import React, { useState } from "react";
import styled from "styled-components";
import ToDoInput from "./ToDoInput";
import ShowInputButton from "./ShowInputButton";

// interface Props {
//   onAdd: (toDo: string) => void;
// }

const Inputcontainer = () => {
  const [showToDoInput, setShowToDoInput] = useState(false);

  const onClose = () => {
    // onAdd(toDo);
    setShowToDoInput(false);
  };

  return (
    <>
      {showToDoInput && <ToDoInput onClose={onClose} />}
      <ShowInputButton
        show={showToDoInput}
        onClick={() => setShowToDoInput(!showToDoInput)}
      />
    </>
  );
};

export default Inputcontainer;

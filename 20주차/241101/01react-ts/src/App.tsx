import React from "react";
import { createGlobalStyle, styled } from "styled-components";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { toDoState } from "./atoms";
import Board from "./Board";

const GlobalStyled = createGlobalStyle`
  * {
    margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: "Source Sans 3", serif;
  }

  ul,li {
    list-style:none;
  }

  a{
    text-decoration:none;
    color:inherit;
  }

  body {
    background: ${(props) => props.theme.bgColor};
    color:#000;
  }
`;

const Wrapper = styled.main`
  width: 1200px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  border: 1px solid #ccc;
`;

const Boards = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
`;

// const toDos = ["a", "b", "c", "d", "e"];

const App = () => {
  const [toDos, setToDos] = useRecoilState(toDoState);
  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {

    if (!destination) {
      return{}
    }

    if (destination?.droppableId === source.droppableId) {
      setToDos((oldToDos) => {
        const boardCopy = [...oldToDos[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return {
          ...oldToDos,
          [(source, droppableId)]: boardCopy,
        };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setToDos((oldToDos) => {
const sourceBoard = [...oldToDos[source.droppableId]]
        const destinationBoard = [...oldToDos[destination?.droppableId]]
        sourceBoard.splice(source.index,1)
        destinationBoard.splice(destination.index,0,draggableId)
        return {
          ...oldToDos,
          [source.droppableId]: ,
          [destination?.droppableId]:destinationBoard ,
        };
      });
    }
  };
  return (
    <>
      <GlobalStyled />
      <DragDropContext onDragEnd={onDragEnd}>
        <Wrapper>
          <Boards>
            {Object.keys(toDos).map((boardId) => (
              <Board key={boardId} toDos={boardId} boardId={boardId} />
            ))}
          </Boards>
        </Wrapper>
      </DragDropContext>
    </>
  );
};

export default App;

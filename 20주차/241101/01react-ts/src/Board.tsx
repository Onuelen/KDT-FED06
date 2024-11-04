import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";
import DraggableCard from "./components/DraggableCard";

const Wrapper = styled.div`
  background: ${(props) => props.theme.boardColor};
  padding: 20px 10px;
  padding-top: 30px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;

const Title = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 10px;
  text-transform: uppercase;
`;

interface BoadProps {
  toDos: string[];
  boardId: string;
}

const Board = ({ toDos, boardId }) => {
  return (
    <>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(magic) => (
          <Wrapper ref={magic.innerRef} {...magic.droppableProps}>
            {toDos.map((toDo, index) => (
              <Draggable key={toDo} draggableId={toDo} index={index}>
                {(magic) => (
                  <Card
                    ref={magic.innerRef}
                    {...magic.draggableProps}
                    {...magic.dragHandleProps}
                  >
                    {toDo}
                  </Card>
                )}
              </Draggable>
            ))}
            {/* {magic.placeholder} */}
          </Wrapper>
        )}
      </Droppable>
    </>
  );
};

export default Board;

import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => props.theme.cardColor};
  border-radius: 8px;
  margin-bottom: 5px;
  padding: 10px;
`;

const DraggableCard = () => {
  return <></>;
};

export default React.memo(DraggableCard);

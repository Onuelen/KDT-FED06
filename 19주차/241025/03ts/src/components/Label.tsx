import React from "react";
import styled from "styled-components";

const Container = styled.span`
  font-size: 18px;
`;

interface Props {
  data: number;
}

const label = ({ data }: Props) => {
  return <Container>Label</Container>;
};

export default label;

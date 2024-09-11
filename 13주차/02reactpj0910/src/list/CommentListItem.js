import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  border: 1px solid gray;
  padding: 8px 16px;
  border-radius: 8px;
  width: calc(100%-32px);
  cursor: pointer;
  background: #fff;
  transition: background 0.3s;
  &:hover {
    background: lightgray;
  }
`;

const CommentListItem = ({ comment }) => {
  return <Wrapper>{comment}</Wrapper>;
};

export default CommentListItem;

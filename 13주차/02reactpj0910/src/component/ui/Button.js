import React from "react";
import styled from "styled-components";

const StlyedButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 16px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  cursor: pointer;
`;

const Button = ({ title, onClick }) => {
  return <StlyedButton onClick={onClick}>{title || "button"}</StlyedButton>;
};

export default Button;

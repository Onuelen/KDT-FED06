import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./Navigation";
import styled from "styled-components";

const Wrapper = styled.div`
  border:1px solid #f0f;
  background:#33ff00;
`

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Navigation />
        <Outlet />
      </Wrapper>
    </>
  );
};

export default Layout;

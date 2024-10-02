import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Outlet />
      Layout
    </>
  );
};

export default Layout;

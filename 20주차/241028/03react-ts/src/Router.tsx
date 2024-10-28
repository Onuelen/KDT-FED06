import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Root from "./Root";
import NotFound from "./Components/NotFound";
import ErrorComponents from "./Components/ErrorComponents";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponents />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Root from "./Root";
import NotFound from "./Components/NotFound";
import ErrorComponents from "./Components/ErrorComponents";
import User from "./Components/User";
import Followers from "./Components/Followers";

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
      {
        path: "users/:userId",
        element: <User />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default Router;

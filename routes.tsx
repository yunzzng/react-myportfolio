import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/components/Layout";
import HomePage from "./src/pages/HomePage";
import PortfolioPage from "./src/pages/PortfolioPage";
import SkillPage from "./src/pages/SkillPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/portfolio", element: <PortfolioPage /> },
      { path: "/skill", element: <SkillPage /> },
    ],
  },
]);

export default router;
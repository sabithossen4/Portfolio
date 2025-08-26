import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import RootLayout from "../layouts/RootLayout";
import ProjectDetail from "../pages/ProjectDetail";
import ProjectLayout from "../layouts/ProjectLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: "/project/:id",
    Component: ProjectLayout,
    children: [
      {
            index: true,
          Component: ProjectDetail,
          }, 
    ],
  },
]);
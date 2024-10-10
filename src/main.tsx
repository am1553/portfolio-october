import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home.tsx";
import AboutMe from "./routes/AboutMe.tsx";
import Projects from "./routes/Projects.tsx";

const router = createBrowserRouter([
  {
    path: "",
    Component: App,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/about-me",
        Component: AboutMe,
      },
      {
        path: "/projects",
        Component: Projects,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

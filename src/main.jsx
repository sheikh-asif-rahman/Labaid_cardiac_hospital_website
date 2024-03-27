import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import AboutLabaid from "./pages/AboutLabaid.jsx";
import ConsultantsPage from "./pages/ConsultantsPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "aboutlabaid",
    element: <AboutLabaid />,
  },
  {
    path: "homepage",
    element: <HomePage />,
  },
  {
    path: "consultantspage",
    element: <ConsultantsPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

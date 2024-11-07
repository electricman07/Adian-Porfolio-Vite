import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./error-page";
import "./index.css";
import App from "./App";
import PortfolioPage from "./pages/PortfolioPage/PortfolioPage";
import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/portfoliopage",
    element: <PortfolioPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ScrollToHashElement behavior="smooth" />
    <RouterProvider router={router} />
  </StrictMode>
);

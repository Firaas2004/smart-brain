import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import SignIn from "./SignIn.jsx";
import Register from "./Register.jsx";

const router = createBrowserRouter([
  {
    path: "home",
    element: <App />,
  },
  {
    path: "/",
    element: <SignIn />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Menu from "./routes/Menu";
import Contact from "./routes/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
  {
    path: "/contact-us",
    element: <Contact />,
  },
]);

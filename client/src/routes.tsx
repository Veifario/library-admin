import { createBrowserRouter } from "react-router-dom";
import { BookForm, Main } from "./pages";
import App from "./App";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/add-collection",
        element: <BookForm />,
      },
    ],
  },
]);
 
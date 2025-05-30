import {
  RouterProvider,
} from "react-router";


import ReactDOM from "react-dom/client";
import { router } from "./components/routes";



const root = document.getElementById("root")!;
ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />
);


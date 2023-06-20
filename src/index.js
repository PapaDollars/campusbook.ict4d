import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./routes/Home"; 
import HomeChat from "./Room/HomeChat";
import Room from "./Room/Room";
import ErrorPage from "./routes/ErrorPage";
import Epreuves from "./Epreuves/Epreuves";
import { Auth } from "./components";

const AppLayout = () => {
    return(
        <>
        <Outlet/>
        </>
    )
}

const router = createBrowserRouter([
    {
        element: <AppLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <Home/>,
              },
              {
                path: "homeChat",
                element: <HomeChat/>,
              },
              {
                path: "/room/:roomID",
                element: <Room/>,
              },
              {
                path: "epreuve",
                element: <Epreuves/>,
              },
        ],
    },
  
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Home from "./routes/Home"; 
import HomeRoom from "./Room/HomeRoom";
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
                element: <Auth/>,
              },
              {
                path: "home",
                element: <Home/>,
              },
              {
                path: "homeRoot",
                element: <HomeRoom/>,
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
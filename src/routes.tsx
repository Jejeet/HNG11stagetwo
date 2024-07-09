import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layouts/RootLayout";
import Help from "./pages/Help";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

const router = createBrowserRouter([
  {
        path: "/",
        element:<RootLayout />,
        children:[
            {
              path: "/",
              element: <Home/>
            },
            {
              path: "help",
              element: <Help/>
            }
          ,{
            path: "/product",
            element: <ProductList/>
          }
        
        ]
  }
  ]);

export default router
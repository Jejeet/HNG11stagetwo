
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Transfer from "./components/Hero/Transfer";
import RootLayout from "./components/layouts/RootLayout";
import CardPayment from "./pages/CardPayment";
import Cart from "./pages/Cart";
import CheckOut from "./pages/CheckOut";
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
          },
          {
            path: "/cart",
            element: <Cart/>
          },
          {
            path: "/check",
            element: <CheckOut/>
          },
          {
            path: "/card",
            element: <CardPayment/>
          },
          {
            path: "/transfer",
            element: <Transfer/>
          }
        
        ]
  }
  ]);

export default router
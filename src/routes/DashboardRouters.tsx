import { ReactLocation, Router } from "@tanstack/react-location";
import React from "react";
import Customers from "../pages/customers/Customers";
import Desing from "../pages/design/Desing";
import Index from "../pages/index/Index";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Setting from "../pages/settings/Setting";

const location = new ReactLocation();

const DashboardRouters = () => {
  return (
    <Router
      location={location}
      routes={[
        { path: "/", element: <Index /> },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/customers",
          element: <Customers />,
        },
        {
          path: "/design",
          element: <Desing />,
        },
        {
          path: "/settings",
          element: <Setting />,
        },
      ]}
    />
  );
};

export default DashboardRouters;

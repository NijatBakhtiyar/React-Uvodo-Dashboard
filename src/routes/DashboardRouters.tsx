import { ReactLocation, Router } from "@tanstack/react-location";
import React from "react";
import Customers from "../pages/customers/Customers";
import Design from "../pages/design/Design";
import GeneralSettings from "../pages/settings/GeneralSettings";
import Index from "../pages/index/Index";
import Orders from "../pages/orders/Orders";
import Products from "../pages/products/Products";
import Setting from "../pages/settings/Setting";
import Account from "../pages/settings/Account";
import Shipping from "../pages/settings/Shipping";
import Taxes from "../pages/settings/Taxes";
import SocialProfiles from "../pages/settings/SocialProfiles";
import Legal from "../pages/settings/Legal";
import Password from "../pages/settings/Password";
import Payment from "../pages/settings/Payment";

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
          element: <Design />,
        },
        {
          path: "/settings",
          element: <Setting />,
          children: [
            {
              path: "/",
              element: <GeneralSettings />,
            },
            {
              path: "payment",
              element: <Payment />,
            },
            {
              path: "account",
              element: <Account />,
            },
            {
              path: "shipping",
              element: <Shipping />,
            },
            {
              path: "taxes",
              element: <Taxes />,
            },
            {
              path: "socialprofiles",
              element: <SocialProfiles />,
            },
            {
              path: "legal",
              element: <Legal />,
            },
            {
              path: "password",
              element: <Password />,
            },
          ],
        },
      ]}
    />
  );
};

export default DashboardRouters;

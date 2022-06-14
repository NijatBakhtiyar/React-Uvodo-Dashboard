import { Link } from "@tanstack/react-location";
import React, { useState } from "react";
import CustomersIcon from "../../images/svg/CustomersIcon";
import DesignIcon from "../../images/svg/DesignIcon";
import HouseIcon from "../../images/svg/HouseIcon";
import LogoIcon from "../../images/svg/LogoIcon";
import LogoutIcon from "../../images/svg/LogoutIcon";
import OrderIcon from "../../images/svg/OrderIcon";
import ProductIcon from "../../images/svg/ProductsIcon";
import { SideBar } from "./SideBarStyle";
import UserIcon from "../../images/png/UserIcon.png";

const Sidebar = () => {
  const [active, setActive] = useState<string>("");

  return (
    <SideBar>
      <div className="topBar">
        <h1>
          <LogoIcon /> Stora
        </h1>
        <Link
          to="/"
          activeOptions={{ exact: true }}
        >
          {({ isActive }) => {
            return (
              <p className={isActive ? "active" : ""}>
                <HouseIcon params={{ color: isActive ? "#fff" : "" }} />
                Dashboard
              </p>
            );
          }}
        </Link>
        <Link to="/products">
          {({ isActive }) => {
            return (
              <p className={isActive ? "active" : ""}>
                <ProductIcon params={{ color: isActive ? "#fff" : "" }} />
                Products
              </p>
            );
          }}
        </Link>
        <Link to="/orders">
          {({ isActive }) => {
            return (
              <>
                <p className={isActive ? "active" : ""}>
                  <OrderIcon params={{ color: isActive ? "#fff" : "" }} />
                  Orders
                </p>
                <span className={active ? "active" : ""}>23</span>
              </>
            );
          }}
        </Link>
        <Link to="/customers">
          {({ isActive }) => {
            return (
              <p className={isActive ? "active" : ""}>
                <CustomersIcon params={{ color: isActive ? "#fff" : "" }} />
                Customers
              </p>
            );
          }}
        </Link>
        <Link to="/design">
          {({ isActive }) => {
            return (
              <p className={isActive ? "active" : ""}>
                <DesignIcon params={{ color: isActive ? "#fff" : "" }} />
                Design
              </p>
            );
          }}
        </Link>
        <Link to="/settings">
          {({ isActive }) => {
            return (
              <p className={isActive ? "active" : ""}>
                <HouseIcon params={{ color: isActive ? "#fff" : "" }} />
                Settings
              </p>
            );
          }}
        </Link>
        <button>
          <LogoutIcon /> Logout
        </button>
      </div>
      <div className="bottomBar">
        <div className="image">
          <img
            src={UserIcon}
            alt="user"
          />
        </div>
        Micheal Murphy
      </div>
    </SideBar>
  );
};

export default Sidebar;

import { Link } from "@tanstack/react-location";
import React, { useState } from "react";
import CustomersIcon from "../../images/svg/CustomersIcon";
import DesingIcon from "../../images/svg/DesignIcon";
import HouseIcon from "../../images/svg/HouseIcon";
import LogoIcon from "../../images/svg/LogoIcon";
import LogoutIcon from "../../images/svg/LogoutIcon";
import OrderIcon from "../../images/svg/OrderIcon";
import ProductIcon from "../../images/svg/ProductsIcon";
import { SideBar } from "./SideBarStyle";
import UserIcon from "../../images/png/UserIcon.png";

const Sidebar = () => {
  const [active, setActive] = useState<string>("");

  function getActiveProps(text: string) {
    setActive(text);
    return {
      style: {
        color: "#fff",
        backgroundColor: "black",
      },
    };
  }

  return (
    <SideBar>
      <div className="topBar">
        <h1>
          <LogoIcon /> Stora
        </h1>
        <Link
          to="/"
          getActiveProps={() => getActiveProps("dashboard")}
          activeOptions={{ exact: true }}
        >
          <p>
            <HouseIcon
              params={{ color: active === "dashboard" ? "#fff" : "" }}
            />
            Dashboard
          </p>
        </Link>{" "}
        <Link
          to="/products"
          getActiveProps={() => getActiveProps("products")}
        >
          <p>
            {" "}
            <ProductIcon
              params={{ color: active === "products" ? "#fff" : "" }}
            />
            Products
          </p>
        </Link>
        <Link
          to="/orders"
          getActiveProps={() => getActiveProps("orders")}
        >
          <p>
            <OrderIcon params={{ color: active === "orders" ? "#fff" : "" }} />
            Orders
          </p>
          <span className={active === "orders" ? "active" : ""}>23</span>
        </Link>
        <Link
          to="/customers"
          getActiveProps={() => getActiveProps("customers")}
        >
          <p>
            <CustomersIcon
              params={{ color: active === "customers" ? "#fff" : "" }}
            />
            Customers
          </p>
        </Link>
        <Link
          to="/design"
          getActiveProps={() => getActiveProps("design")}
        >
          <p>
            <DesingIcon params={{ color: active === "design" ? "#fff" : "" }} />
            Design
          </p>
        </Link>
        <Link
          to="/settings"
          getActiveProps={() => getActiveProps("settings")}
        >
          <p>
            <HouseIcon
              params={{ color: active === "settings" ? "#fff" : "" }}
            />{" "}
            Settings
          </p>
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

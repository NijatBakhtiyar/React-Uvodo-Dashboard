import { Link, Outlet } from "@tanstack/react-location";
import React from "react";
import DashboardLayouts from "../DashboardLayouts";
import { SettingStyle } from "./SettingStyle";

const Setting: React.FC = () => {
  return (
    <DashboardLayouts>
      <SettingStyle>
        <p>Settings</p>
        <div className="nav">
          <Link
            to=""
            activeOptions={{ exact: true }}
          >
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>General</p>;
            }}
          </Link>
          <Link to="account">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Account</p>;
            }}
          </Link>
          <Link to="payment">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Payment</p>;
            }}
          </Link>
          <Link to="shipping">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Shipping</p>;
            }}
          </Link>
          <Link to="taxes">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Taxes</p>;
            }}
          </Link>
          <Link to="socialprofiles">
            {({ isActive }) => {
              return (
                <p className={isActive ? "active" : ""}>Social profiles</p>
              );
            }}
          </Link>
          <Link to="legal">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Legal</p>;
            }}
          </Link>
          <Link to="password">
            {({ isActive }) => {
              return <p className={isActive ? "active" : ""}>Password</p>;
            }}
          </Link>
        </div>

        <Outlet />
      </SettingStyle>
    </DashboardLayouts>
  );
};

export default Setting;

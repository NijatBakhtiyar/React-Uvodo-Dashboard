import { Link } from "@tanstack/react-location";
import React from "react";
import Tabs from "../../components/tabs/Tabs";
import DashboardLayouts from "../DashboardLayouts";
import { SettingStyle } from "./SettingStyle";

const Setting: React.FC = () => {
  return (
    <DashboardLayouts>
      {/* <Link to="account">Account</Link>
      <Link to="payment">Payment</Link> */}
      <SettingStyle>
        <p>Settings</p>
        <Tabs />
      </SettingStyle>
    </DashboardLayouts>
  );
};

export default Setting;

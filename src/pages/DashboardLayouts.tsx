import { styled } from "@stitches/react";
import React from "react";
import Sidebar from "../components/sidebar/Sidebar";
const DashboardLayouts: React.FC = ({ children }) => {
  const Main = styled("div", {
    display: "flex",
    minHeight: "100vh",
    ".children": {
      width: "100%",

      ".btn": {
        boxShadow: " inset 0px -1px 0px #E9E9E9",
        display: "flex",
        justifyContent: "flex-end",
        padding: "20px 80px",

        button: {
          border: "none",
          backgroundColor: "unset",
          cursor: "pointer",
          fontSize: "14px",
          fontWeight: "600",
        },
      },
    },
  });

  return (
    <Main>
      <Sidebar />
      <div className="children">
        <div className="btn">
          <button>Visit store</button>
        </div>
        {children}
      </div>
    </Main>
  );
};
export default DashboardLayouts;

// import { css } from "@stitches/react";
import React from "react";
import ReactDOM from "react-dom";
import { Global } from "../stitches.config";
import App from "./App";

Global();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

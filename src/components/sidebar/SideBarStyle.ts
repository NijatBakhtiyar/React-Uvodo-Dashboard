import { styled } from "@stitches/react";

export const SideBar = styled("div", {
  flex: 0.2,
  display: "flex",
  minWidth: "200px",
  flexDirection: "column",
  backgroundColor: "#F6F6F6",
  justifyContent: "space-between",
  boxShadow: "inset -1px 0px 0px #E9E9E9",

  ".topBar": {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "10px",
    padding: "16px 12px",

    h1: {
      padding: "0 12px",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      gap: "5px",
      fontSize: "30px",
    },

    a: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      color: "#000",
      borderRadius: "4px",
      margin: 0,
      padding: "4px 12px",
      height: "40px",

      p: {
        display: "flex",
        alignItems: "center",
        gap: "5px",
        fontWeight: "600",
        margin: 0,
      },

      span: {
        fontWeight: "400",
        fontSize: "12px",
        display: "inline-block",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#EAEAEA",
      },

      "&.active": {
        color: "#fff",
        backgroundColor: "#000",

        span: {
          backgroundColor: "unset",
          color: "#fff",
        },
      },
    },

    button: {
      display: "flex",
      gap: "5px",
      borderRadius: "4px",
      alignItems: "center",
      padding: "4px 12px",
      fontWeight: "700",
      color: "#000",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
    },
  },

  ".bottomBar": {
    boxShadow: "inset -1px 1px 0px #E9E9E9",
    padding: "16px 24px",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "8px",
    fontWeight: "500",
    fontSize: "14px",

    img: {
      backgroundColor: "#fbc00d",
      borderRadius: "4px",
    },
  },
});

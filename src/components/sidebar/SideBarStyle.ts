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
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",

      padding: "4px 12px",
      fontWeight: "600",
      color: "#000",

      "&:active": {
        color: "inherit",
      },

      p: {
        margin: 0,
        display: "flex",
        alignItems: "center",
        color: "inherit",
        gap: "5px",
      },

      span: {
        fontWeight: "400",
        fontSize: "12px",
        display: "inline-block",
        padding: "10px",
        borderRadius: "50%",
        backgroundColor: "#EAEAEA",

        "&.active": {
          backgroundColor: "transparent",
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

      "&:focus": {
        color: "#fff",
        backgroundColor: "black",
      },
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

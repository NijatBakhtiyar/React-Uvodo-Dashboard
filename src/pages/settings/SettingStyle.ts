import { styled } from "@stitches/react";

export const SettingStyle = styled("div", {
  padding: "32px 80px",

  p: {
    fontSize: "36px",
    fontWeight: "700",
  },

  ".nav": {
    display: "flex",
    gap: "20px",
    boxShadow: " inset 0px -1px 0px #E9E9E9",

    a: {
      minWidth: "fit-content",

      p: {
        fontWeight: "600",
        color: "#808080",
        paddingBottom: "16px",
        fontSize: "16px",
        backgroundColor: "none",
        margin: 0,

        "&.active": {
          color: "black",
          position: "relative",

          "&.active::after": {
            content: "''",
            position: "absolute",
            bottom: "0px",
            left: "0",
            width: "100%",
            height: "3px",
            backgroundColor: "#000",
          },
        },
      },
    },
  },

  ".payment": {
    paddingTop: "32px",

    ".title": {
      marginBottom: "22px",

      h3: {
        fontSize: "16px",
        fontWeight: "600",
        lineHeight: "32px",
        margin: 0,
      },

      p: {
        color: "#808080",
        fontSize: "14px",
        fontWeight: "400",
        lineHeight: "24px",
        margin: 0,
      },
    },
  },
});

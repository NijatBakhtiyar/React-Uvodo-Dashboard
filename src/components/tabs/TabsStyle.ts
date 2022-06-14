import { styled } from "@stitches/react";

export const TabsDesign = styled("div", {
  ".nav": {
    display: "flex",
    gap: "20px",
    fontWeight: "600",
    color: "#808080    ",
    boxShadow: " inset 0px -1px 0px #E9E9E9",

    div: {
      paddingBottom: "16px",
      cursor: "pointer",

      "&[aria-selected='true']": {
        color: "black",
        position: "relative",

        "&::after": {
          content: "''",
          position: "absolute",
          bottom: "0",
          left: "0",
          width: "100%",
          height: "3px",
          backgroundColor: "#000",
        },
      },
    },
  },
});

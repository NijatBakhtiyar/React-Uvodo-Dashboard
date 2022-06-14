import { styled } from "@stitches/react";

export const FormCss = styled("div", {
  maxWidth: "500px",
  width: "100%",

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "22px",

    ".formGroup": {
      display: "flex",
      flexDirection: "column",
      width: "100%",

      label: {
        fontSize: "14px",
        lineHeight: "24px",
      },

      input: {
        border: "1px solid #C7C7C7",
        borderRadius: "4px",
        padding: "8px 16px",
      },

      textarea: {
        border: "1px solid #C7C7C7",
        borderRadius: "4px",
        padding: "8px 16px",
        resize: "none",
      },
    },
    ".btn": {
      marginTop: "30px",
      padding: "0 !important",
      boxShadow: "unset !important",

      ".button": {
        background: "#624CE0 !important",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "4px",
        border: "1px solid #624CE0",
      },
    },

    ".select": {
      position: "relative",

      div: {
        width: "100%",
        lineHeight: "24px",
      },

      button: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        cursor: "pointer",
        padding: "8px 16px",
        backgroundColor: "unset",
        border: "1px solid #c7c7c7",
        borderRadius: "4px",
      },

      ul: {
        backgroundColor: "#f6f6f6 !important",
        border: "1px solid #c7c7c7",
        borderRadius: "4px",
      },
    },
  },
});

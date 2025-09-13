import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0F0F10",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#0F0F10",
      paper: "#252427",
    },
    text: {
      primary: "rgba(255, 255, 255, 0.55)",
      secondary: "#FFFFFF",
    },
    divider: "rgba(255, 255, 255, 0.15)",
  },
  typography: {
    fontFamily: "Inter, Arial, sans-serif",
  },
  shape: {
    borderRadius: 10,
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          backgroundColor: "#39373E",
          fontSize: "14px",
          color: "white",
          height: "40px",
          border: "1px solid transparent",
          "& > fieldset": {
            display: "none",
          },
          "&:hover": {
            border: "1px solid #a6a5a8",
          },
        },
        select: {
          padding: "8px",
          paddingLeft: "12px",
          paddingRight: "42px !important",
        },
        icon: {
          color: "white",
          right: "8px",
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          color: "white",
          fontSize: "14px",
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: "10px",
          "&:before": {
            display: "none",
          },
        },
      },
    },
  },
});

export default theme;

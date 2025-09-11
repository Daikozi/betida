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
  components: {
    MuiToggleButtonGroup: {
      styleOverrides: {
        root: {
          gap: "1rem",
          "&.MuiToggleButtonGroup-firstButton": {
            borderRadius: "10px",
          },
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          color: "rgba(255, 255, 255, 0.55)",
          background: "#39373E",
          border: "none",
          borderRadius: "10px",
          padding: "14px 10px",
          height: "44px",
          minWidth: "81px",
          "&.Mui-selected": {
            background: "linear-gradient(180deg, #26C5F3 0%, #B429F9 100%);",
            color: "#FFFFFF",

            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            },
          },

          "&:hover": {
            backgroundColor: "rgba(255, 255, 255, 0.1)",
          },

          "&.MuiToggleButtonGroup-firstButton": {
            borderRadius: "10px",
          },

          "&.MuiToggleButtonGroup-middleButton": {
            borderRadius: "10px",
          },

          "&.MuiToggleButtonGroup-lastButton": {
            borderRadius: "10px",
          },
          "& p": {
            fontWeight: 700,
            lineHeight: "16px",
          },
        },
      },
    },
  },
});

export default theme;

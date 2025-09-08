import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import React from "react";

const drawerWidth = 240;

const Header = () => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{
        width: `calc(100% - ${drawerWidth}px)`,
        ml: `${drawerWidth}px`,
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}>
      <Toolbar
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          padding: "16px",
        }}>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
          MUI
        </Typography>
        <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
          <Button
            sx={{
              color: "#fff",
              width: "90px",
              border: "1.5px solid rgba(255, 255, 255, 0.55)",
              borderRadius: "10px",
              padding: "14px 10px",
              textTransform: "none",
              fontWeight: 600,
              lineHeight: "16px",
              height: "44px",
            }}
            variant="outlined">
            Login
          </Button>
          <Button
            sx={{
              color: "#fff",
              width: "90px",
              borderRadius: "10px",
              padding: "14px 10px",
              textTransform: "none",
              fontWeight: 600,
              lineHeight: "16px",
              background: "linear-gradient(180deg, #F8A902 0%, #F3696E 100%)",
              height: "44px",
            }}
            variant="contained">
            Register
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

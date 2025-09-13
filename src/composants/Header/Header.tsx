"use client";

import { AppBar, Box, Button, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";

import Image from "next/image";
import logo from "@/assets/svg/logo.svg";

const drawerWidth = 64;

const Header = () => {
  return (
    <AppBar
      component="nav"
      position="fixed"
      sx={{
        top: 0,
        left: drawerWidth,
        right: 0,
        width: `calc(100% - ${drawerWidth}px)`,
        px: "16px",
        borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
      }}>
      <Toolbar
        sx={{
          maxWidth: "1200px",
          margin: "0 auto",
          width: "100%",
          height: "76px",
          p: "0 !important",
        }}>
        <Stack
          direction="row"
          alignItems="center"
          gap={1.5}
          sx={{ flexGrow: 1 }}>
          <Image src={logo} alt="Logo" />
          <Typography
            variant="subtitle1"
            component="div"
            fontWeight={600}
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            BRAND NAME
          </Typography>
        </Stack>
        <Box sx={{ display: "flex", gap: 2 }}>
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

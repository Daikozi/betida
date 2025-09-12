"use client";

import theme from "@/theme";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import React, { useState } from "react";
import casino from "@/assets/svg/casino.svg";
import casino_selected from "@/assets/svg/casino_selected.svg";
import browse from "@/assets/svg/browse.svg";
import browse_selected from "@/assets/svg/browse_selected.svg";
import bets from "@/assets/svg/bets.svg";
import sports from "@/assets/svg/sports.svg";
import chat from "@/assets/svg/chat.svg";
import Image from "next/image";

const BottomBar = () => {
  const [value, setValue] = useState(0);
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        borderTop: `1px solid ${theme.palette.divider}`,
        zIndex: 1300,
        display: { xs: "block", md: "none" },
      }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          height: 76,
          backgroundColor: "#0F0F10",
          paddingTop: 1,
          paddingBottom: 2,
        }}>
        <BottomNavigationAction
          label="Browse"
          value={0}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.primary,
              "&.Mui-selected": { color: theme.palette.text.secondary },
            },
          }}
          icon={
            <Image src={value === 0 ? browse_selected : browse} alt="Browse" />
          }
        />
        <BottomNavigationAction
          label="Casino"
          value={1}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.primary,
              "&.Mui-selected": { color: theme.palette.text.secondary },
            },
          }}
          icon={
            <Image src={value === 1 ? casino_selected : casino} alt="Casino" />
          }
        />
        <BottomNavigationAction
          label="Bets"
          value={2}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.primary,
              "&.Mui-selected": { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={bets} alt="Bets" />}
        />
        <BottomNavigationAction
          label="Sports"
          value={3}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.primary,
              "&.Mui-selected": { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={sports} alt="Sports" />}
        />
        <BottomNavigationAction
          label="Chat"
          value={4}
          sx={{
            "& .MuiBottomNavigationAction-label": {
              marginTop: "4px",
              fontSize: "14px",
              fontWeight: 500,
              color: theme.palette.text.primary,
              "&.Mui-selected": { color: theme.palette.text.secondary },
            },
          }}
          icon={<Image src={chat} alt="Chat" />}
        />
      </BottomNavigation>
    </Box>
  );
};

export default BottomBar;

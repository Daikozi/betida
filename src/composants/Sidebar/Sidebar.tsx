"use client";

import React, { useState } from "react";
import {
  Box,
  Card,
  // Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  // ListItemIcon,
  ListItemText,
  // ToggleButton,
  // ToggleButtonGroup,
  Toolbar,
} from "@mui/material";
import ToggleButtonGroupp from "../ToggleButtonGroup/ToggleButtonGroup";
import theme from "@/theme";

const drawerWidth = 240;

const Sidebar = () => {
  const [displayMode, setDisplayMode] = useState("casino");
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
        },
        [theme.breakpoints.down("md")]: { display: "none" },
      }}
      variant="permanent"
      anchor="left">
      <Toolbar
        sx={{
          justifyContent: "center",
          padding: "16px",
        }}>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <ToggleButtonGroupp
            value={displayMode}
            onChange={(_, value) => {
              if (value !== null) {
                setDisplayMode(value);
              }
            }}
            ariaLabel="Display Mode"
            toggleButtons={[
              { value: "casino", label: "Casino" },
              { value: "sports", label: "Sports" },
            ]}
          />
        </div>
      </Toolbar>
      <Box sx={{ padding: 2 }}>
        <Card
          sx={{
            backgroundColor: "background.default",
            borderRadius: "10px",
            mb: 2,
          }}>
          <List disablePadding>
            {["Promotions", "Affiliate", "VIP Club", "Blog", "Forum"].map(
              (text) => (
                <ListItem key={text} disablePadding disableGutters>
                  <ListItemButton
                    sx={{
                      padding: "10px",
                    }}>
                    {/* <ListItemIcon> */}
                    {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                    {/* </ListItemIcon> */}
                    <ListItemText
                      primary={text}
                      sx={{ color: "text.secondary", margin: 0 }}
                    />
                  </ListItemButton>
                </ListItem>
              )
            )}
          </List>
        </Card>
        <Card
          sx={{
            backgroundColor: "background.default",
            borderRadius: "10px",
            mb: 2,
          }}>
          <List disablePadding>
            {[
              "Sponsorships",
              "Responsible Gambling",
              "Live Support",
              "Language English",
            ].map((text) => (
              <ListItem key={text} disablePadding>
                <ListItemButton
                  sx={{
                    padding: "10px",
                  }}>
                  {/* <ListItemIcon> */}
                  {/* {index % 2 === 0 ? <InboxIcon /> : <MailIcon />} */}
                  {/* </ListItemIcon> */}
                  <ListItemText
                    primary={text}
                    sx={{ color: "text.secondary", margin: 0 }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Card>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

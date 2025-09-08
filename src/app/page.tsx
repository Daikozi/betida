"use client";
import { Typography } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Typography
        variant="h1"
        component="h2"
        gutterBottom
        color="textSecondary">
        Welcome to Next.js with MUI and Geist Fonts!
      </Typography>
      <Typography variant="body1">
        This is a sample application demonstrating the integration of
        Material-UI (MUI) with custom theming and Geist fonts in a Next.js
        project.
      </Typography>
    </div>
  );
}

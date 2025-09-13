"use client";

import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import social_1 from "@/assets/svg/Social Icons-1.svg";
import social_2 from "@/assets/svg/Social Icons-2.svg";
import social_3 from "@/assets/svg/Social Icons-3.svg";
import social_4 from "@/assets/svg/Social Icons-4.svg";
import social_5 from "@/assets/svg/Social Icons-5.svg";
import social_6 from "@/assets/svg/Social Icons-6.svg";
import social_7 from "@/assets/svg/Social Icons-7.svg";
import carat_down_dark from "@/assets/svg/carat_down_dark.svg";
import carat_down_light from "@/assets/svg/carat_down_light.svg";
import logo from "@/assets/svg/logo.svg";
import Image from "next/image";
import { footerContent } from "./Footer.content";

const Footer = () => {
  const [isExpanded, setIsExpanded] = useState<boolean[]>(
    Array(footerContent.length).fill(false)
  );
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 3,
        mb: 6,
      }}>
      <Box
        sx={{
          maxWidth: 1200,
          width: "100%",
          bgcolor: { lg: "background.paper", xs: "transparent" },
          padding: { xs: 0, lg: 3 },
          pb: { xs: 0, lg: 2 },
          borderRadius: "10px",
          mx: 2,
        }}>
        <Grid
          container
          spacing={2}
          sx={{ display: { xs: "none", lg: "flex" } }}>
          {footerContent.map(({ links, title }) => (
            <Grid size={{ sm: 6, md: 4, lg: 2 }} key={title}>
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight={600}>
                {title}
              </Typography>
              <List dense>
                {links.map(({ label, url }) => (
                  <ListItem sx={{ p: 0 }} key={label}>
                    <Link
                      href={url}
                      sx={{ textDecoration: "none", color: "text.primary" }}>
                      <ListItemText primary={label} />
                    </Link>
                  </ListItem>
                ))}
              </List>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ mt: 2, mb: 1, display: { xs: "none", lg: "block" } }} />
        <Stack
          alignItems="center"
          spacing={3}
          sx={{ mb: 3, display: { xs: "flex", lg: "none" } }}>
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
              sx={{ color: "white" }}>
              BRAND NAME
            </Typography>
          </Stack>

          <Stack spacing="10px" sx={{ width: "100%" }}>
            {footerContent.map(({ title, links }, index) => (
              <Accordion key={title} disableGutters>
                <AccordionSummary
                  expandIcon={
                    isExpanded[index] ? (
                      <Image src={carat_down_light} alt="Expand" />
                    ) : (
                      <Image src={carat_down_dark} alt="Expand" />
                    )
                  }
                  aria-controls="panel1-content"
                  id="panel1-header">
                  <Typography
                    component="span"
                    color={
                      isExpanded[index] ? "text.secondary" : "text.primary"
                    }
                    fontWeight={600}>
                    {title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <List dense>
                    {links.map(({ label, url }) => (
                      <ListItem sx={{ p: 0 }} key={label}>
                        <Link
                          href={url}
                          sx={{
                            textDecoration: "none",
                            color: "text.primary",
                          }}>
                          <ListItemText primary={label} />
                        </Link>
                      </ListItem>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Stack>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          justifyContent="space-between"
          spacing={2}
          alignItems="center">
          <Stack
            direction="row"
            spacing={1}
            alignItems="center"
            justifyContent="space-evenly"
            sx={{ width: { xs: "100%", lg: "auto" } }}>
            <IconButton aria-label="delete">
              <Image src={social_1} alt="Social Icon 1" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_2} alt="Social Icon 2" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_3} alt="Social Icon 3" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_4} alt="Social Icon 4" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_5} alt="Social Icon 5" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_6} alt="Social Icon 6" />
            </IconButton>
            <IconButton aria-label="delete">
              <Image src={social_7} alt="Social Icon 7" />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={1}>
            <Typography variant="caption">© 2025 brandname.com</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="caption">All Rights Reserved.</Typography>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Footer;

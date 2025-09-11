import {
  Box,
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
import React from "react";

import social_1 from "@/assets/svg/Social Icons-1.svg";
import social_2 from "@/assets/svg/Social Icons-2.svg";
import social_3 from "@/assets/svg/Social Icons-3.svg";
import social_4 from "@/assets/svg/Social Icons-4.svg";
import social_5 from "@/assets/svg/Social Icons-5.svg";
import social_6 from "@/assets/svg/Social Icons-6.svg";
import social_7 from "@/assets/svg/Social Icons-7.svg";
import Image from "next/image";
import { footerContent } from "./Footer.content";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}>
      <Box sx={{ maxWidth: 1200, width: "100%", marginTop: 4 }}>
        <Grid container spacing={2}>
          {footerContent.map(({ links, title }) => (
            <Grid size={2} key={title}>
              <Typography variant="body2" color="text.secondary" mt={2}>
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
        <Divider sx={{ my: 2 }} />
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center">
          <Stack direction="row" spacing={1}>
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

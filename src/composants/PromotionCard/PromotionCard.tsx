import {
  // Box,
  // Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import NextImage from "next/image";
import React, { FC } from "react";

type PromotionCardProps = {
  chipLabel: string;
  title: string;
  subtitle: string;
  image: string;
};

const PromotionCard: FC<PromotionCardProps> = ({
  chipLabel,
  title,
  subtitle,
  image,
}) => {
  return (
    <Card
      sx={{
        borderRadius: "10px",
        padding: 2,
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        gap: 2,
        minWidth: { xs: "100%", sm: "calc(50% - 4px)", md: "calc(33% - 8px)" },
      }}>
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={{ height: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 0,
          }}>
          <Chip
            label={chipLabel}
            sx={{
              backgroundColor: "#464547",
              color: "white",
              maxWidth: "fit-content",
              fontSize: "0.75rem",
              fontWeight: 500,
              height: 24,
              mb: 1.5,
            }}
          />
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary" }}
            fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.primary" }}>
            {subtitle}
          </Typography>
        </CardContent>
        <CardActions sx={{ padding: 0, marginTop: "auto" }}>
          <Link
            href="#"
            sx={{
              fontSize: "0.875rem",
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
            }}>
            Read More
          </Link>
        </CardActions>
      </Stack>
      <NextImage
        src={image}
        alt={title}
        width={140}
        height={140}
        style={{ borderRadius: "10px", flexShrink: 0, objectFit: "cover" }}
      />
    </Card>
  );
};

export default PromotionCard;

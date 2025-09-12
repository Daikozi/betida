import {
  // Box,
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import ellipse from "@/assets/svg/Ellipse 1.svg";
import NextImage from "next/image";

type LargeTrendingCardProps = {
  image: string;
  quantityPlaying: number;
  rank: number;
  title: string;
  highlightColor?: string;
};

const LargeTrendingCard = ({
  image,
  quantityPlaying,
  rank,
  title,
  highlightColor = "transparent",
}: LargeTrendingCardProps) => {
  return (
    <Stack spacing={1}>
      <Card
        sx={{
          width: "100%",
          border: "2px solid transparent",
          borderRadius: "10px",
          transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
          "&:hover": {
            border: `2px solid ${highlightColor}`,
          },
        }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={
              image.startsWith("/assets/images/")
                ? image
                : `/assets/images/${image}`
            }
            alt={`trending game ${rank}`}
          />
        </CardActionArea>
      </Card>

      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Typography variant="caption" color="text.primary" fontWeight={600}>
          {title}
        </Typography>
        <Stack spacing={0.5} alignItems="center" direction="row">
          <NextImage src={ellipse} alt="" width={6} height={6} />
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {quantityPlaying}
          </Typography>
          <Typography variant="caption">playing</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default LargeTrendingCard;

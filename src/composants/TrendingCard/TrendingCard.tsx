import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import ellipse from "@/assets/svg/Ellipse 1.svg";
import NextImage from "next/image";

type TrendingCardProps = {
  image: string;
  quantityPlaying?: number;
  rank: number;
};

const TrendingCard = ({ image, quantityPlaying, rank }: TrendingCardProps) => {
  return (
    <Stack spacing={1}>
      <Card
        sx={{
          width: 144,
          borderRadius: "10px",
          position: "relative",
          transition: "transform 0.3s cubic-bezier(.4,0,.2,1)",
          "&:hover": {
            transform: "scale(0.95)",
          },
        }}>
        <Box
          sx={{
            position: "absolute",
            top: 6,
            left: 6,
            zIndex: 1,
            width: 32,
            height: 32,
            borderRadius: "50%",
            backgroundColor: "#0F0F10",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 24,
              height: 24,
              zIndex: 0,
            }}
          />
          <Typography
            variant="subtitle1"
            color="white"
            textAlign="center"
            fontWeight="bold"
            sx={{ position: "relative", zIndex: 1 }}>
            {rank}
          </Typography>
        </Box>
        <CardActionArea>
          <CardMedia
            component="img"
            height="188.8"
            image={
              image.startsWith("/assets/images/")
                ? image
                : `/assets/images/${image}`
            }
            alt={`trending game ${rank}`}
          />
        </CardActionArea>
      </Card>
      {!!quantityPlaying && (
        <Stack spacing={0.5} alignItems="center" direction="row">
          <NextImage src={ellipse} alt="" width={6} height={6} />
          <Typography variant="caption" color="text.secondary" fontWeight={600}>
            {quantityPlaying}
          </Typography>
          <Typography variant="caption">playing</Typography>
        </Stack>
      )}
    </Stack>
  );
};

export default TrendingCard;

import { Box, IconButton, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode, useRef } from "react";

import next from "@/assets/svg/next.svg";
import back_light from "@/assets/svg/back_light.svg";
import Image from "next/image";

type CarouselProps = {
  children: ReactNode;
};

const Carousel: FC<CarouselProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // Gestion du drag horizontal
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // Empêche le scroll de la page
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    document.body.style.cursor = "";
  };

  const handleMouseUp = () => {
    isDown.current = false;
    document.body.style.cursor = "";
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - (scrollRef.current?.offsetLeft || 0);
    const walk = x - startX.current;
    if (scrollRef.current)
      scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}>
        <Typography variant="subtitle1" fontWeight={600}>
          Trending Games
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton aria-label="delete" size="small">
            <Image src={back_light} alt="back" />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <Image src={next} alt="next" />
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: "calc(100vw - (100vw - 100%))",
          overflow: "hidden",
        }}>
        <Stack
          direction="row"
          justifyContent="flex-start"
          spacing={1}
          ref={scrollRef}
          sx={{
            overflowX: "auto",
            cursor: "grab",
            scrollBehavior: "smooth",
            width: "100%",
            userSelect: "none",
            "&::-webkit-scrollbar": { display: "none" },
          }}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}>
          {children}
        </Stack>
      </Box>
    </Box>
  );
};

export default Carousel;

import { Box, BoxProps, IconButton, Stack, Typography } from "@mui/material";
import React, { FC, ReactNode, useLayoutEffect, useRef, useState } from "react";

import next from "@/assets/svg/next.svg";
import back_light from "@/assets/svg/back_light.svg";
import Image from "next/image";

type CarouselProps = {
  children: ReactNode;
  title: string;
} & BoxProps;

const Carousel: FC<CarouselProps> = ({ children, title, ...boxProps }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    isDown.current = true;
    startX.current = e.pageX - (scrollRef.current?.offsetLeft || 0);
    scrollLeft.current = scrollRef.current?.scrollLeft || 0;
    document.body.style.cursor = "grabbing";
  };

  const handleMouseLeave = () => {
    isDown.current = false;
    document.body.style.cursor = "";
  };

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useLayoutEffect(() => {
    const updateScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      setCanScrollPrev(el.scrollLeft > 0);
      setCanScrollNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", updateScroll);
      window.addEventListener("resize", updateScroll);
      updateScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", updateScroll);
      window.removeEventListener("resize", updateScroll);
    };
  }, []);
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

  const handleNext = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  return (
    <Box {...boxProps}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={1}>
        <Typography variant="subtitle1" fontWeight={600}>
          {title}
        </Typography>
        <Stack direction="row" spacing={1} alignItems="center">
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handlePrev}
            disabled={!canScrollPrev}>
            {canScrollPrev ? (
              <Image
                src={next}
                alt="previous"
                width={24}
                height={24}
                style={{ transform: "rotate(180deg)" }}
              />
            ) : (
              <Image src={back_light} alt="previous" width={24} height={24} />
            )}
          </IconButton>
          <IconButton
            aria-label="delete"
            size="small"
            onClick={handleNext}
            disabled={!canScrollNext}>
            {canScrollNext ? (
              <Image src={next} alt="next" width={24} height={24} />
            ) : (
              <Image
                src={back_light}
                alt="next"
                width={24}
                height={24}
                style={{ transform: "rotate(180deg)" }}
              />
            )}
          </IconButton>
        </Stack>
      </Stack>
      <Box
        sx={{
          width: "calc(100vw - (100vw - 100%))",
          overflow: "hidden",
          position: "relative",
        }}>
        {canScrollPrev && (
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              bottom: 0,
              width: 32,
              pointerEvents: "none",
              zIndex: 2,
              background:
                "linear-gradient(to right, #0F0F10 0%, rgba(240,240,240,0) 100%)",
            }}
          />
        )}

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
        {canScrollNext && (
          <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              bottom: 0,
              width: 32,
              pointerEvents: "none",
              zIndex: 2,
              background:
                "linear-gradient(to left, #0F0F10 0%, rgba(240,240,240,0) 100%)",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default Carousel;

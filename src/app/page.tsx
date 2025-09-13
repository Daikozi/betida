"use client";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  Stack,
  ToggleButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import info from "@/assets/svg/info.svg";
import none from "@/assets/svg/none.svg";
import bronze from "@/assets/svg/bronze.svg";
import arrow_right from "@/assets/svg/arrow_right.svg";
import ProgressBar from "@/composants/ProgressBar/ProgressBar";
import { useEffect, useRef, useState } from "react";
import SearchBar from "@/composants/SearchBar/SearchBar";
import TrendingCard from "@/composants/TrendingCard/TrendingCard";
import PromotionCard from "@/composants/PromotionCard/PromotionCard";
import FAQ from "@/composants/FAQ/FAQ";
import Table from "@/composants/Table/Table";
import LargeTrendingCard from "@/composants/LargeTrendingCard/LargeTrendingCard";
import Carousel from "@/composants/Carousel/Carousel";
import ToggleButtonGroup from "@/composants/ToggleButtonGroup/ToggleButtonGroup";

export default function Home() {
  const [betType, setBetType] = useState<"Casino" | "Sport">("Casino");
  const [tableView, setTableView] = useState<
    "Casino Bets" | "Sport Bets" | "Race Leaderboard"
  >("Casino Bets");

  const carouselBoxRef = useRef<HTMLDivElement>(null);
  const carouselStackRef = useRef<HTMLDivElement>(null);

  const trendingGames = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_games_${i + 1}.png`,
    rank: i + 1,
    quantityPlaying: 365,
  }));

  const trendingSports = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_sports_${i + 1}.png`,
    rank: i + 1,
  }));

  useEffect(() => {
    const box = carouselBoxRef.current;
    const stack = carouselStackRef.current;

    if (box && stack) {
      const boxWidth = box.offsetWidth;
      const stackWidth = stack.scrollWidth;

      console.log({ boxWidth, stackWidth });
    }
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
      }}>
      <Box sx={{ width: "100%", maxWidth: 1200 }}>
        <Grid container spacing={2} mb={4.5}>
          <Grid size={{ xs: 12, sm: 12, md: 4 }}>
            <Box>
              <Typography variant="h5" color="text.secondary" mb={4}>
                Mon1453
              </Typography>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                spacing={1}
                mb={2}
                sx={{ position: "relative" }}>
                <Typography color="text.secondary" sx={{ fontWeight: "500" }}>
                  Your VIP Progress
                </Typography>
                <Box
                  sx={{
                    position: "absolute",
                    transform: "translate(50%, -40%)",
                    top: "50%",
                    right: "50%",
                  }}>
                  <Image src={arrow_right} alt="info" />
                </Box>
                <Stack direction="row" spacing={0.5} alignItems="center">
                  <Typography color="text.secondary">50.00%</Typography>
                  <Image src={info} alt="info" />
                </Stack>
              </Stack>

              <ProgressBar variant="determinate" value={50} />
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mt={3}
                sx={{ position: "relative", width: "100%" }}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Image src={none} alt="info" />
                  <Typography variant="body2" color="text.secondary">
                    None
                  </Typography>
                </Stack>
                <Box
                  sx={{
                    position: "absolute",
                    transform: "translate(50%, -40%)",
                    top: "50%",
                    right: "50%",
                  }}>
                  <Image src={arrow_right} alt="info" />
                </Box>
                <Stack direction="row" spacing={1} alignItems="center">
                  <Typography variant="body2" color="text.secondary">
                    Bronze
                  </Typography>
                  <Image src={bronze} alt="info" />
                </Stack>
              </Stack>
            </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <LargeTrendingCard
              image="casino.png"
              quantityPlaying={365}
              rank={1}
              title="Casino"
              highlightColor="#3B82F6"
            />
          </Grid>
          <Grid size={{ xs: 6, sm: 6, md: 4 }}>
            <LargeTrendingCard
              image="sport.png"
              quantityPlaying={365}
              rank={1}
              title="Sports"
              highlightColor="#10B981"
            />
          </Grid>
        </Grid>
        <Stack direction="row" spacing={2} mb={3} alignItems="center">
          <Select
            sx={{ minWidth: 100 }}
            value={betType}
            label="Bet Type"
            onChange={(event) =>
              setBetType(event.target.value as "Casino" | "Sport")
            }>
            <MenuItem value="Casino">Casino</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
          </Select>
          <SearchBar />
        </Stack>
        <Carousel title="Trending Games" mb={4}>
          {trendingGames.map((game) => (
            <TrendingCard
              key={game.rank}
              image={game.src}
              rank={game.rank}
              quantityPlaying={game.quantityPlaying}
            />
          ))}
        </Carousel>
        <Carousel title="Trending Sports" mb={4}>
          {trendingSports.map((game) => (
            <TrendingCard key={game.rank} image={game.src} rank={game.rank} />
          ))}
        </Carousel>
        <Carousel title="Trending Sports" mb={4}>
          <PromotionCard
            chipLabel="Promotion"
            title="Team Vitality"
            subtitle="Kill Target Prize Pool"
            image="/assets/images/promotions_1.png"
          />
          <PromotionCard
            chipLabel="New releases"
            title="Angel vs Sinner"
            subtitle="New Enhanced RTP game!"
            image="/assets/images/promotions_2.png"
          />
          <PromotionCard
            chipLabel="Promotion"
            title="Frankie's Ebor Raffle"
            subtitle="Share in $40,000"
            image="/assets/images/promotions_3.png"
          />
        </Carousel>
        <Box
          sx={{
            backgroundColor: "#252427",
            borderRadius: "10px",
            p: 1,
            mb: 1,
            overflowX: "auto",
          }}>
          <ToggleButtonGroup
            value={tableView}
            exclusive
            onChange={(_, value) => {
              if (value !== null) {
                setTableView(value);
              }
            }}
            aria-label="text alignment">
            <ToggleButton value="Casino Bets" aria-label="left aligned">
              Casino Bets
            </ToggleButton>
            <ToggleButton value="Sport Bets" aria-label="centered">
              Sport Bets
            </ToggleButton>
            <ToggleButton value="Race Leaderboard" aria-label="right aligned">
              Race Leaderboard
            </ToggleButton>
          </ToggleButtonGroup>
        </Box>
        <Table />
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            Still Have Questions?
          </Typography>
          <FAQ
            accordionItems={[
              {
                title: "Who is Brand Name",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "Is Brand Name Licensed?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "Is Betting on Brand Name Safe?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "What Currencies Can I Bet With?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "What Types of Casino Games Can I Play?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "What Sports Can I Bet On?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
              {
                title: "How Do I Watch Live Streams?",
                content:
                  "Leading the online gambling industry since 2017, Stake.com offers a wide variety of online casino and sports betting options, operating globally in 15 different languages. With a reputable and secure platform, Stake Casino is home to worldwide local currencies and crypto betting options for online slot games, Stake Originals and live casino games. Stake Sportsbook offers unbeatable odds on all major sporting events including a range of eSport leagues. We host regular bet bonuses and promotions and offer an exclusive VIP Club experience - all with a simple-to-use deposit process on our licensed platform.",
              },
            ]}
          />
        </Stack>
      </Box>
    </Box>
  );
}

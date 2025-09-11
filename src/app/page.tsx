"use client";
import {
  Box,
  MenuItem,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import Image from "next/image";
import casino from "@/assets/images/casino.png";
import sport from "@/assets/images/sport.png";
import info from "@/assets/svg/info.svg";
import none from "@/assets/svg/none.svg";
import bronze from "@/assets/svg/bronze.svg";
import arrow_right from "@/assets/svg/arrow_right.svg";
import ellipse from "@/assets/svg/Ellipse 1.svg";
import ProgressBar from "@/composants/ProgressBar/ProgressBar";
import CustomSelect from "@/composants/Select/Select";
import { ChangeEvent, KeyboardEvent, useState } from "react";
import SearchBar from "@/composants/SearchBar/SearchBar";
import TrendingCard from "@/composants/TrendingCard/TrendingCard";
import PromotionCard from "@/composants/PromotionCard/PromotionCard";
import Accordion from "@/composants/Accordion/Accordion";
import Table from "@/composants/Table/Table";

export default function Home() {
  const [betType, setBetType] = useState<"Casino" | "Sport">("Casino");
  const [tableView, setTableView] = useState<
    "Casino Bets" | "Sport Bets" | "Race Leaderboard"
  >("Casino Bets");

  const trendingGames = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_games_${i + 1}.png`,
    rank: i + 1,
    quantityPlaying: 365,
  }));

  const trendingSports = Array.from({ length: 8 }, (_, i) => ({
    src: `/assets/images/trending_sports_${i + 1}.png`,
    rank: i + 1,
  }));

  const handleChange = (
    event: ChangeEvent<KeyboardEvent<HTMLInputElement>>
  ) => {
    setBetType(event.target.value as "Casino" | "Sport");
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}>
      <Box sx={{ maxWidth: 1200, marginTop: 4 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          mb={4.5}>
          <Box
            sx={{
              maxWidth: 360,
              width: "33%",
            }}>
            <Typography variant="h5" color="text.secondary" mb={4}>
              Mon1453
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              spacing={1}
              mb={2}
              sx={{ position: "relative", width: "100%" }}>
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
          <Box
            sx={{
              height: 268,
              maxWidth: 360,
              width: "33%",
              borderRadius: "10px",
            }}>
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                border: "2px solid transparent",
                "> img": {
                  border: "2px solid transparent",
                  scale: 1.1,
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                },
                "&:hover": {
                  border: "2px solid #0A5DB4",
                },
              }}>
              <Image
                src={casino}
                alt="Casino"
                style={{
                  objectFit: "contain",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between">
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: "600" }}>
                Casino
              </Typography>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Image src={ellipse} alt="info" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}>
                  348
                </Typography>
                <Typography variant="caption">playing</Typography>
              </Stack>
            </Stack>
          </Box>
          <Box
            sx={{
              height: 268,
              maxWidth: 360,
              width: "33%",
              borderRadius: "10px",
            }}>
            <Box
              sx={{
                borderRadius: "10px",
                overflow: "hidden",
                transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                border: "2px solid transparent",
                "> img": {
                  border: "2px solid transparent",
                  scale: 1.1,
                  transition: "all 0.3s cubic-bezier(.4,0,.2,1)",
                },
                "&:hover": {
                  border: "2px solid #63F274",
                },
              }}>
              <Image
                src={sport}
                alt="Sport"
                style={{
                  objectFit: "contain",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between">
              <Typography
                variant="caption"
                color="text.secondary"
                sx={{ fontWeight: "600" }}>
                Sports
              </Typography>
              <Stack direction="row" spacing={0.5} alignItems="center">
                <Image src={ellipse} alt="info" />
                <Typography
                  variant="caption"
                  color="text.secondary"
                  sx={{ fontWeight: "600" }}>
                  348
                </Typography>
                <Typography variant="caption">playing</Typography>
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <Stack direction="row" spacing={2} mb={3} alignItems="center">
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={betType}
            label="Bet Type"
            onChange={handleChange}>
            <MenuItem value="Casino">Casino</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
          </CustomSelect>
          <SearchBar />
        </Stack>
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            Trending Games
          </Typography>
          <Stack direction="row" spacing="7px" mb={4.5}>
            {trendingGames.map((game) => (
              <TrendingCard
                key={game.rank}
                image={game.src}
                rank={game.rank}
                quantityPlaying={game.quantityPlaying}
              />
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            Trending Sports
          </Typography>
          <Stack direction="row" spacing="7px" mb={4.5}>
            {trendingSports.map((game) => (
              <TrendingCard key={game.rank} image={game.src} rank={game.rank} />
            ))}
          </Stack>
        </Stack>
        <Stack>
          <Typography variant="subtitle1" mb={2} fontWeight={600}>
            Promotions
          </Typography>
          <Stack
            direction="row"
            spacing={1.5}
            mb={4.5}
            justifyContent={"space-between"}>
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
          </Stack>
        </Stack>
        <Box
          sx={{
            backgroundColor: "#252427",
            borderRadius: "10px",
            p: 1,
            mb: 1,
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
          <Accordion
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

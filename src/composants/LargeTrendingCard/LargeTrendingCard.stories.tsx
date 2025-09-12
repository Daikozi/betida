import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import LargeTrendingCard from "./LargeTrendingCard";

const meta = {
  title: "Components/LargeTrendingCard",
  component: LargeTrendingCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    image: "/assets/images/casino.png",
    quantityPlaying: 365,
    rank: 1,
    title: "Casino",
  },
} satisfies Meta<typeof LargeTrendingCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

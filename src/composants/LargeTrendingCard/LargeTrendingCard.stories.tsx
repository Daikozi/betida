import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { fn } from "storybook/test";
import LargeTrendingCard from "./LargeTrendingCard";

const meta = {
  title: "Componants/LargeTrendingCard",
  component: LargeTrendingCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
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

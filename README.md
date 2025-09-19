# Betida

Betida is a modern Progressive Web App (PWA) built with [Next.js](https://nextjs.org), offering a rich online casino and sports betting experience. The project leverages the latest React and Next.js features, Material UI, and a modular component architecture.

## Features

- 🎰 **Casino Games**: Slots, Live Casino, Roulette, Blackjack, Poker, and more.
- 🏆 **Sportsbook**: Live sports, soccer, basketball, tennis, eSports, and betting bonuses.
- 🏅 **Promotions**: Dynamic promotions and competitions with prize pools.
- 👤 **User Profile & VIP Club**: User info, progress tracking, and VIP rewards.
- 🌐 **Multilingual Support**: Language selection (English, Turkish, ...).
- 💬 **Live Support**: Integrated help center and live chat.
- 📱 **PWA**: Installable, offline support, and mobile-friendly.
- 🧩 **Component-driven**: Storybook integration for UI development and testing.
- 🧪 **Testing**: Vitest and Playwright for robust testing.

## Getting Started

Install dependencies and run the development server:

```bash
pnpm install
pnpm dev
# or
npm install
npm run dev
# or
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Storybook

This project uses [Storybook](https://storybook.js.org/) for developing and testing UI components in isolation.

- To start Storybook locally:

```bash
pnpm storybook
# or
npm run storybook
# or
yarn storybook
```

Storybook will be available at [http://localhost:6006](http://localhost:6006).

## MUI Theme

Betida uses a custom [Material UI (MUI)](https://mui.com/) theme, defined in [`src/theme/theme.ts`](src/theme/theme.ts) and [`src/theme/tokens.ts`](src/theme/tokens.ts).

- The theme customizes colors, typography, and component styles to match the Betida brand.
- You can adjust the palette and typography in these files to fit your needs.

---

## Scripts

- `dev`: Start the development server
- `build`: Build for production
- `start`: Start the production server
- `lint`: Run ESLint
- `format`: Format code with Prettier
- `storybook`: Run Storybook for UI components
- `typecheck`: TypeScript type checking
- `validate`: Run formatting, linting, and type checking

## Tech Stack

- **Framework**: Next.js, React
- **Styling**: Material UI, Emotion
- **State Management**: Zustand
- **Testing**: Vitest, Playwright, Storybook
- **PWA**: next-pwa

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Material UI](https://mui.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)

## Deployment

Deploy easily on [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Environment Variables

Copy the `.env.template` file to `.env` at the root of the project and fill in the required values:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
NEXT_PUBLIC_ENV=local
NEXT_PUBLIC_ROBOTS_ALLOW=false
CHROMATIC_PROJECT_TOKEN=<your-chromatic-project-token>
```

Refer to `.env.template` for all required variables. Do not commit your real `.env` file.

---

## Chromatic (Visual Testing)

This project uses [Chromatic](https://www.chromatic.com/) for visual regression testing and UI review.

- The Chromatic project token is stored in your `.env` file as `CHROMATIC_PROJECT_TOKEN`.
- To publish your Storybook to Chromatic, simply run:

```bash
pnpm chromatic
# or
npx chromatic
```

Chromatic will provide a link to review UI changes and visual diffs after each run.

---

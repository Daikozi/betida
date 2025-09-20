import react from '@vitejs/plugin-react'
import path from 'path'
import tsconfigPaths from 'vite-tsconfig-paths'
import { coverageConfigDefaults, defineConfig } from 'vitest/config'

const stubNextAssetImport = () => ({
  name: 'stub-next-asset-import',
  transform(_code: string, id: string): { code: string } | null {
    if (/(jpg|jpeg|png|webp|gif|svg)$/.test(id)) {
      const imgSrc = path.relative(process.cwd(), id)

      return {
        code: `export default { src: '${imgSrc}', height: 1, width: 1 }`,
      }
    }

    return null
  },
})

export default defineConfig({
  plugins: [react(), tsconfigPaths(), stubNextAssetImport()],
  test: {
    environment: 'jsdom',
    globals: true,
    restoreMocks: true,
    setupFiles: './vitest.setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    testTimeout: 20_000,
    coverage: {
      reporter: ['html', 'lcovonly', 'text', 'cobertura'],
      exclude: [
        '*.ts',
        'scripts/**',
        'e2e/**',
        '**/*.stories.tsx',
        'src/mocks/**/*',
        'src/server/testing/**/*',
        'src/server/infrastructure/db/migrations/*.ts',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
})

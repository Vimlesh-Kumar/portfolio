import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html'],
      all: true,
      include: ['src/**/*.{js,jsx,ts,tsx}'],
      exclude: [
        'src/assets/**',
        'src/setupTests.ts',
        'src/components/TechIcon.jsx',
        'src/components/CodeRain.jsx',
        'src/components/InteractiveTerminal.jsx',
        'src/components/Projects.jsx',
        'src/components/Skills.jsx'
      ],
      thresholds: {
        lines: 100,
        functions: 100,
        branches: 100,
        statements: 100,
      },
    },
  },
})

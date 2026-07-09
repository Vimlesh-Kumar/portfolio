import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

/**
 * Flat ESLint config for the portfolio.
 *
 * Layers, in order:
 *  - `js.configs.recommended`            – core JavaScript correctness rules.
 *  - `reactHooks…flat.recommended`       – Rules of Hooks + exhaustive deps.
 *  - `reactRefresh.configs.vite`         – keeps components Fast-Refresh safe.
 *  - `react/jsx-uses-vars` (below)       – marks identifiers used *only* in JSX
 *    (e.g. `motion`, `<Icon />`) as "used" so `no-unused-vars` doesn't flag
 *    them. This replaces the previous brittle `varsIgnorePattern` workaround.
 */
export default defineConfig([
  globalIgnores(['dist', 'coverage']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    plugins: {
      react,
    },
    languageOptions: {
      ecmaVersion: 2021,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      // Detect identifiers referenced only through JSX so they aren't reported
      // as unused imports/vars.
      'react/jsx-uses-vars': 'error',
      // Allow deliberately-unused identifiers prefixed with `_`, plus
      // capitalized names (imported components/constants that may be used in
      // JSX but occasionally left for clarity).
      'no-unused-vars': [
        'error',
        {
          varsIgnorePattern: '^[A-Z_]',
          argsIgnorePattern: '^_',
        },
      ],
    },
  },
])

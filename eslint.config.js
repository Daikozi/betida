// Appliquer parserOptions.project pour les fichiers TypeScrip
import eslint from '@eslint/js'
import pkg from '@next/eslint-plugin-next'
import reactQuery from '@tanstack/eslint-plugin-query'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import storybook from 'eslint-plugin-storybook'
import { defineConfig, globalIgnores } from 'eslint/config'
import { configs as tseslintConfigs } from 'typescript-eslint'

import * as localRules from './scripts/eslint/local-rules.js'

const { flatConfig: next } = pkg

export default defineConfig(
  globalIgnores(['./dist', './.next', './coverage', '**/*.generated.d.ts', 'next-env.d.ts']),

  eslint.configs.recommended,

  tseslintConfigs.strictTypeChecked,
  tseslintConfigs.stylisticTypeChecked,

  importPlugin.flatConfigs.typescript,
  importPlugin.flatConfigs.warnings,

  react.configs.flat.recommended,
  react.configs.flat['jsx-runtime'],

  reactHooks.configs['recommended-latest'],

  jsxA11y.flatConfigs.recommended,

  next.coreWebVitals,

  storybook.configs['flat/recommended'],

  reactQuery.configs['flat/recommended'],

  prettierConfig,

  {
    files: ['**/*.ts', '**/*.tsx', '.storybook/*.ts'],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
  },

  {
    languageOptions: {
      parserOptions: {
        // projectService: true, // Désactivé pour test bug parsing
      },
    },

    settings: {
      react: {
        version: 'detect',
      },
    },

    plugins: { local: localRules },

    rules: {
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'func-style': ['error', 'expression'],
      'prefer-arrow-callback': 'error',
      'func-names': ['error', 'never'],
      'arrow-body-style': ['error', 'as-needed'],
      'object-shorthand': 'warn',
      'no-console': 'error',
      'no-param-reassign': ['error', { props: false }],
      'max-depth': ['error', { max: 3 }],

      'react-hooks/exhaustive-deps': 'error',
      'react/function-component-definition': [
        'error',
        {
          namedComponents: 'arrow-function',
          unnamedComponents: 'arrow-function',
        },
      ],
      'react/jsx-curly-brace-presence': ['error', { props: 'never', children: 'never' }],
      'react/jsx-key': ['error', { checkFragmentShorthand: true }],
      'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }],
      'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
      // 'react/jsx-handler-names': [
      //   'off',
      //   {
      //     eventHandlerPrefix: 'handle',
      //     eventHandlerPropPrefix: 'on',
      //   },
      // ],

      '@typescript-eslint/naming-convention': [
        'error',
        {
          selector: 'typeParameter',
          format: ['PascalCase'],
          custom: {
            regex: '^[A-Za-z]{3,}',
            match: true,
          },
        },
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/explicit-module-boundary-types': 'error',
      '@typescript-eslint/no-confusing-void-expression': ['error', { ignoreArrowShorthand: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/prefer-nullish-coalescing': ['error', { ignorePrimitives: true }],
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'no-type-imports' }],
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
            properties: false,
          },
        },
      ],
      // '@typescript-eslint/no-shadow': 'error',

      'local/no-alias-in-same-dir': 'error',
    },
  },

  {
    files: ['src/components/**/*'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['../*', '**/../*'],
              message: 'Parent folder relative imports are disallowed. Use configured path aliases instead.',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['src/components/designSystem/**/*'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@Components/presentationals/**', '@Components/container/**', '@Components/pages/**'],
              message: 'Do not import presentational, pages or container into design system components',
            },
            {
              group: ['../*', '**/../*'],
              message: 'Parent folder relative imports are disallowed. Use configured path aliases instead.',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['src/components/presentationals/**/*'],
    rules: {
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: ['@Components/container/**', '@Components/pages/**'],
              message: 'Do not import pages or container into presentational components',
            },
            {
              group: ['../*', '**/../*'],
              message: 'Parent folder relative imports are disallowed. Use configured path aliases instead.',
            },
          ],
        },
      ],
    },
  },

  {
    files: ['**/*.js'],
    extends: [tseslintConfigs.disableTypeChecked],
    rules: {
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
  },

  // Inclusion explicite du fichier setup storybook pour éviter l'erreur de parsing
  {
    files: ['.storybook/vitest.setup.ts'],
    rules: {},
  },
)

import js from '@eslint/js';
import next from '@next/eslint-plugin-next';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import globals from 'globals';

export default [
  js.configs.recommended,

  // TypeScript (typescript-eslint v8+ provides flat configs)
  ...tseslint.configs.recommended,

  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@next/next': next,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      // Next core rules (closest equivalent to next/core-web-vitals)
      ...next.configs.recommended.rules,
      ...next.configs['core-web-vitals'].rules,

      // Your prefs
      'import/order': [
        'error',
        {
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },

  {
    ignores: ['.next/**', 'node_modules/**', 'dist/**', 'out/**', 'coverage/**'],
  },
];

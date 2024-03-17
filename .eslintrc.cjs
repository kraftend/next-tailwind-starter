/** @type {import("eslint").Linter.Config} */
const config = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:@typescript-eslint/stylistic-type-checked',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:@next/next/core-web-vitals',
    'prettier',
  ],
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  globals: {
    React: 'writable',
  },
  parser: '@typescript-eslint/parser',
  parserOptions: { project: true },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/no-misused-promises': [
      'error',
      { checksVoidReturn: { attributes: false } },
    ],
    '@typescript-eslint/require-await': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/prefer-nullish-coalescing': 'off',
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-extraneous-dependencies': ['error'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/no-unknown-property': ['error', { ignore: ['jsx', 'cmdk-input-wrapper'] }],
    '@next/next/no-html-link-for-pages': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
  },
  ignorePatterns: [
    '**/*.md',
    '**/*.config.js',
    '**/*.config.cjs',
    '**/.eslintrc.cjs',
    '.next',
    'dist',
    'pnpm-lock.yaml',
    'node_modules',
    'public',
    '.cache',
    'generated',
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;

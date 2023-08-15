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
    'plugin:tailwindcss/recommended',
    'plugin:@next/next/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
  env: {
    es2022: true,
    node: true,
    browser: true,
  },
  globals: {
    React: 'writable',
  },
  plugins: ['@typescript-eslint', 'import'],
  rules: {
    'no-console': [
      1,
      {
        allow: ['warn', 'error'],
      },
    ],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_', varsIgnorePattern: '^_' },
    ],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      { prefer: 'type-imports', fixStyle: 'separate-type-imports' },
    ],
    '@typescript-eslint/no-misused-promises': [2, { checksVoidReturn: { attributes: false } }],
    'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
    'import/no-extraneous-dependencies': ['error'],
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'tailwindcss/no-custom-classname': 'off',
    '@next/next/no-html-link-for-pages': 'off',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: ['tsconfig.json'],
      },
    },
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['cn', 'clsx', 'twMerge', 'cva'],
    },
  },
  ignorePatterns: [
    '**/*.md',
    '.eslintrc.cjs',
    '*.esm.js',
    '*.config.js',
    '*.config.cjs',
    '.next',
    'dist',
    'pnpm-lock.yaml',
    'node_modules',
    'public',
    '.cache',
  ],
  reportUnusedDisableDirectives: true,
};

module.exports = config;

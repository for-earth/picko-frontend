module.exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
  },
  ignorePatterns: [
    'node_modules/',
    '.pnp.cjs',
    '.pnp.loader.cjs',
    'public/',
    '.yarn/',
    'storybook-static',
  ],
  extends: [
    'airbnb',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@next/next/recommended',
  ],
  plugins: [
    'simple-import-sort',
    'unused-imports',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:flowtype/recommended',
      ],
      plugins: [
        '@typescript-eslint',
        'flowtype',
      ],
      rules: {
        '@typescript-eslint/no-use-before-define': 'off',
        'flowtype/no-types-missing-file-annotation': 'off',
      },
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    },
    {
      files: ['src/hooks/**/**/*.test.ts?(x)'],
      rules: {
        'react-hooks/rules-of-hooks': 'off',
      },
    },
    {
      files: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
      extends: ['plugin:testing-library/react', 'plugin:jest/recommended'],
      rules: {
        'jest/no-identical-title': 'off',
        'react-hooks/rules-of-hooks': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      extends: ['plugin:cypress/recommended'],
      files: ['cypress/**/*.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./cypress/tsconfig.json'],
      },
    },
    {
      extends: ['plugin:storybook/recommended'],
      files: ['**/*.stories.ts?(x)'],
      rules: {
        'flowtype/no-types-missing-file-annotation': 'off',
      },
    },
  ],
  rules: {
    'react/require-default-props': 'off',
    'import/order': 'off',
    'react/jsx-no-useless-fragment': ['error', {
      allowExpressions: true,
    }],
    '@next/next/no-html-link-for-pages': ['error', 'app/'],
    'simple-import-sort/imports': ['error', {
      groups: [
        ['^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)'],
        ['^react'],
        ['^next'],
        ['^@?\\w'],
        ['^(@|@company|@ui|components|utils|config|vendored-lib)(/.*|$)'],
        ['^\\u0000'],
        ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
        ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
        ['^.+\\.svg$'],
        ['^.+\\.s?css$'],
      ],
    }],
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': ['warn', {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_',
    }],
  },
};

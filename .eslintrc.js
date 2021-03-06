module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': ['off'],
    'comma-dangle': 0,
    'import/prefer-default-export': 0,
    'object-curly-newline': 0,
    'no-param-reassign': 0,
    'no-confusing-arrow': 0,
    'react/jsx-props-no-spreading': ['off'],
    'react/jsx-one-expression-per-line': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'eslintno-console': 0,
  },
};

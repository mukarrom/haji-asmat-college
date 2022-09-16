module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    // 0 = "off"
    // 1 = "warn"
    // 2 = "error"
    'react/jsx-filename-extension': 0,
    'no-unused-vars': 1,
    'react/react-in-jsx-scope': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 1,
    'jsx-a11y/label-has-associated-control': 1,
    'react/button-has-type': 1,
    'jsx-a11y/alt-text': 1,
    'jsx-a11y/no-noninteractive-tabindex': 0,
  },
};

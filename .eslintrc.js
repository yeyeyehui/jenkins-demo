module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jest/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": 0,
    "react/jsx-filename-extension": 0,
    "no-shadow": 0,
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "react/function-component-definition": 0,
  },
};

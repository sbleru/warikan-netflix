module.exports = {
  extends: [
    "next",
    "turbo",
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  plugins: ["unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
  },
};

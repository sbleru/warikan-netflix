module.exports = {
  root: true,
  extends: ["custom"],
  rules: {
    /**
     * @see https://eslint.org/docs/latest/rules/no-restricted-imports
     */
    "no-restricted-imports": [
      "error",
      {
        paths: [
          {
            name: "@chakra-ui/react",
            message: "Please use ui",
          },
        ],
      },
    ],

    /**
     * no-unused-vars
     * @see https://typescript-eslint.io/rules/no-unused-vars/
     */
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
  },
};

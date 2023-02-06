import { extendTheme, defineStyle, theme as origTheme } from "ui";

const semanticTokens = {
  colors: {
    surface: {
      default: "#282c34",
    },
    "action.primary": {
      default: origTheme.colors.white,
    },
    "action.primary.hovered": {
      default: origTheme.colors.gray[200],
    },
    "text.primary": {
      default: origTheme.colors.white,
    },
    "text.ondark": {
      default: origTheme.colors.black,
    },
  },
};

const styles = {
  /**
   * Global Styles
   * https://chakra-ui.com/docs/styled-system/global-styles
   */
  global: {
    "html, body": {
      color: "text.primary",
      backgroundColor: "surface",
      lineHeight: "tall",
    },
  },
};

const primaryButton = defineStyle({
  bg: "action.primary",
  color: "text.ondark",
  border: "2px",
  _hover: {
    bg: "action.primary.hovered",
  },
  _disabled: {
    opacity: 0.4,
  },
});

export const theme = extendTheme({
  styles,
  semanticTokens,
  components: {
    Button: {
      variants: {
        primary: primaryButton,
      },
    },
  },
});

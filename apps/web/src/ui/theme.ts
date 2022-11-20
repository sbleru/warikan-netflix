import { extendTheme, defineStyle } from "ui";

export const theme = extendTheme({
  components: {
    Button: {
      variants: {
        primary: defineStyle({
          bg: "white",
          color: "black",
          border: '2px',
          _hover: {
            bg: "gray.200",
          },
          _disabled: {
            opacity: 0.4,
          },
        }),
      },
    },
  },
});

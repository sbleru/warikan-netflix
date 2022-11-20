import { ChakraProvider } from "ui";
import type { AppProps } from "next/app";
import { FC } from "react";
import { theme } from "../ui/theme";

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default MyApp;

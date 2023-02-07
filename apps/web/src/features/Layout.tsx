import { FC } from "react";
import { Box, Flex } from "ui";

export const Layout: FC<{
  header: JSX.Element;
  children: JSX.Element;
}> = ({ children, header }) => {
  return (
    <Flex minHeight={"100vh"} direction={"column"}>
      <Box as={"header"} w={"100%"} position={"fixed"}>
        {header}
      </Box>

      <Box flex={"1 1 auto"} mt="10">
        {children}
      </Box>

      {/* <Box as={"footer"}>{footer}</Box> */}
    </Flex>
  );
};

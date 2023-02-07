import { FC } from "react";
import { Box, Flex, Image, Spacer } from "ui";
import { AccountMenu } from "./AccountMenu";

export const Header: FC = () => {
  return (
    <Flex alignItems={"center"} px="5" py={"3"}>
      <Box>
        <Image src={"/images/warikan.png"} alt="warikan netflix logo" />
      </Box>
      <Spacer />
      <Box>
        <AccountMenu />
      </Box>
    </Flex>
  );
};

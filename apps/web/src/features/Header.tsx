import { FC } from "react";
import { Box, Flex, Image, Spacer } from "ui";
import { AccountMenu } from "./AccountMenu";
import { Navigate } from "./Navigate";

export const Header: FC = () => {
  return (
    <Flex alignItems={"center"} px="5" py={"3"}>
      <Box>
        <Navigate href={(path) => path.$url()}>
          <Image src={"/images/warikan.png"} alt="warikan netflix logo" />
        </Navigate>
      </Box>
      <Spacer />
      <Box>
        <AccountMenu />
      </Box>
    </Flex>
  );
};

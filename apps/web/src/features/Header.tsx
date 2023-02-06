import { Box, Flex, Image } from "ui";

export const Header = () => {
  return (
    <Flex alignItems={"center"}>
      <Box p="2">
        <Image src={"/images/warikan.png"} alt="warikan netflix logo" />
      </Box>
    </Flex>
  );
};

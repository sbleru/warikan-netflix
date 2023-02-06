import { Center, Heading, Image, VStack } from "ui";

export const Account = () => {
  return (
    <Center
      minH={"100vh"}
      backgroundColor="#282c34"
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={"xl"}
      color={"white"}
    >
      <VStack spacing={"4"}>
        <Image
          src={"/images/netflix-seeklogo.com.svg"}
          alt="logo"
          h={"40vmin"}
          pointerEvents={"none"}
        />
        <Heading>アカウント</Heading>
      </VStack>
    </Center>
  );
};

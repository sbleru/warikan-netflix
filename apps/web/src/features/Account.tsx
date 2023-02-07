import { Button, Center, Heading, Image, Link, VStack } from "ui";

export const Account = () => {
  const customerPortalUrl = "https://billing.stripe.com/p/login/14k7wf1fldWAbcc3cc"
  return (
    <Center
      minH={"100vh"}
      display={"flex"}
      flexDir={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      fontSize={"xl"}
    >
      <VStack spacing={"4"}>
        <Image
          src={"/images/netflix-seeklogo.com.svg"}
          alt="logo"
          h={"40vmin"}
          pointerEvents={"none"}
        />
        <Heading>アカウント</Heading>
        <Link
          isExternal
          href={customerPortalUrl}
        >
          <Button variant={"primary"}>サブスクリプションの管理</Button>
        </Link>
      </VStack>
    </Center>
  );
};

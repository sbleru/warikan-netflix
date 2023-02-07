import { FC } from "react";
import { Box, Avatar, Stack, Link } from "ui";
import { PopoverDefault } from "../ui/Popover";
import { Navigate } from "./Navigate";

export const AccountMenu: FC = () => {
  return (
    <PopoverDefault
      triggerComponent={<Avatar />}
      contentComponent={<AccountMenuList />}
    />
  );
};

const AccountMenuList: FC = () => {
  return (
    <Stack direction={"column"}>
      <Box>
        <Navigate href={(path) => path.account.$url()}>
          {/* Use only Link's style */}
          <Link as={"span"}>アカウント</Link>
        </Navigate>
      </Box>
      <Box>
        <Link isExternal href="https://www.netflix.com/browse">
          Netflix
        </Link>
      </Box>
    </Stack>
  );
};

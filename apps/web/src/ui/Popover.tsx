import { FC } from "react";
import {
  Box,
  Popover,
  PopoverContent,
  PopoverTrigger,
  UsePopoverProps,
} from "ui";

export const PopoverDefault: FC<{
  triggerComponent: JSX.Element;
  contentComponent: JSX.Element;
  popoverProps?: UsePopoverProps;
}> = ({ triggerComponent, contentComponent, popoverProps = {} }) => {
  const { trigger = "hover", placement = "top-start", ...rest } = popoverProps;
  return (
    <Popover trigger={trigger} placement={placement} {...rest}>
      <PopoverTrigger>
        {/* 
          If tabIndex is not specified, Content will open each time the Trigger component is clicked.
          - Chakra https://chakra-ui.com/docs/components/popover/usage#customizing-the-popover
          - tabIndex https://developer.mozilla.org/ja/docs/Web/HTML/Global_attributes/tabindex
         */}
        <Box tabIndex={0} role="button">
          {triggerComponent}
        </Box>
      </PopoverTrigger>
      <PopoverContent p={5} w={"full"} bgColor={"surface"}>
        {contentComponent}
      </PopoverContent>
    </Popover>
  );
};

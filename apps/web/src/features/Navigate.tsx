import type { FC, ReactNode } from "react";
import type { UrlObject } from "url";
import NextLink from "next/link";
import { PagesPath, pagesPath } from "../lib/$path";

type Props = {
  href: UrlObject | ((path: PagesPath) => UrlObject) | string;
  children: ReactNode;
};

/**
 * Navigator using pathpida
 * @see Reference https://zenn.dev/hisho/books/617d8f9d6bd78b/viewer/chapter13
 * 
 * NOTE
 * - NextLink render <a> tag defaultly
 *   - https://github.com/vercel/next.js/pull/36436
 * - However, in the case of the ChakraUI component,
 *   it is not given, so it is necessary to explicitly specify that it is an a tag.
 * 
 * @example
 * ```
  <Navigate href={(path) => path.$url()}>
    <Button as={"a"}>
      Link
    </Button>
  </Navigate>
 * ```
 * @example
  const path = pagesPath.$url()
  return (
    <Navigate href={path}>
      <Button as={"a"}>
        Link
      </Button>
    </Navigate>
  );
 */
export const Navigate: FC<Props> = ({ href, children }) => {
  return (
    <NextLink
      href={typeof href === "function" ? href(pagesPath) : href}
      passHref
    >
      {children}
    </NextLink>
  );
};

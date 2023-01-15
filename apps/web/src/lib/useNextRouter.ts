/**
 * Base https://zenn.dev/hisho/books/617d8f9d6bd78b/viewer/chapter13
 */
import { useRouter } from "next/router";
import { useCallback } from "react";
import type { UrlObject } from "url";
import { pagesPath, PagesPath } from "./$path";

export const useNextRouter = () => {
  const nextRouter = useRouter();

  const push = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      return nextRouter.push(typeof url === "function" ? url(pagesPath) : url);
    },
    [nextRouter]
  );

  const replace = useCallback(
    (url: UrlObject | ((path: PagesPath) => UrlObject)) => {
      return nextRouter.replace(
        typeof url === "function" ? url(pagesPath) : url
      );
    },
    [nextRouter]
  );

  return { push, replace } as const;
};

import NextHeadSeo from "next-head-seo";

export type HeadSeoProps = {
  path: string;
  title?: string;
  description?: string;
  ogImagePath?: string;
  noindex?: boolean;
  noTitleTemplate?: boolean;
};

/**
 * @see https://github.com/catnose99/next-head-seo#create-wrapper-component-for-next-head-seo
 */
export const HeadSeo: React.FC<HeadSeoProps> = (props) => {
  const {
    path,
    title = "Warikan Netflix",
    description = "Warikan Netflix",
    ogImagePath = "/images/warikan-n.png",
    noindex,
    noTitleTemplate,
  } = props;

  // FIXME: Set APP_ROOT_URL on enviroment variables
  const APP_ROOT_URL = "https://warikan-netflix.vercel.app";
  // e.g. APP_ROOT_URL=https://example.com
  // https://nextjs.org/docs/basic-features/environment-variables
  // const APP_ROOT_URL = process.env.NEXT_PUBLIC_APP_ROOT_URL;

  const appName = "Warikan Netflix";

  // Absolute page url
  const pageUrl = APP_ROOT_URL + path;
  // Absolute og image url
  const ogImageUrl = APP_ROOT_URL + ogImagePath;

  return (
    <NextHeadSeo
      title={noTitleTemplate ? title : `${title} - ${appName}`}
      //
      canonical={pageUrl}
      description={description}
      robots={noindex ? "noindex, nofollow" : undefined}
      og={{
        title,
        description,
        url: pageUrl,
        image: ogImageUrl,
        type: "article",
        siteName: appName,
      }}
      twitter={{
        card: "summary_large_image",
      }}
      // FIXME: not working
      // customLinkTags={[
      //   {
      //     rel: 'shortcut icon',
      //     href: APP_ROOT_URL + '/images/warikan-w.png',
      //   },
      //   {
      //     rel: 'apple-touch-icon',
      //     href: APP_ROOT_URL + '/images/warikan-w.png',
      //   },
      // ]}
    />
  );
};

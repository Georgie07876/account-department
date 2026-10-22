export function usePageMeta(options: {
  title: string;
  description: string;
  path: string;
  fullTitle?: boolean;
}) {
  const config = useRuntimeConfig();
  const siteUrl = config.public.siteUrl.replace(/\/$/, "");
  const pageUrl = siteUrl ? `${siteUrl}${options.path}` : "";
  const fullTitle = options.fullTitle
    ? options.title
    : `${options.title} — Кафедра бухгалтерского учета и контроллинга`;

  useHead({
    title: options.title,
    titleTemplate: options.fullTitle ? "%s" : undefined,
    meta: [
      { name: "description", content: options.description },
      { property: "og:title", content: fullTitle },
      { property: "og:description", content: options.description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      ...(pageUrl
        ? [
            { property: "og:url", content: pageUrl },
            { property: "og:image", content: `${siteUrl}/assets/team.jpeg` },
          ]
        : []),
    ],
    link: pageUrl ? [{ rel: "canonical", href: pageUrl }] : [],
  });
}

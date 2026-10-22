import { publicRoutes } from "~/data/routes";

export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  setHeader(event, "content-type", "application/xml; charset=utf-8");

  if (!siteUrl) {
    return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n`;
  }

  const urls = publicRoutes
    .map((path) => `  <url><loc>${siteUrl}${path}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
});

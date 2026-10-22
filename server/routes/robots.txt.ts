export default defineEventHandler((event) => {
  const siteUrl = useRuntimeConfig().public.siteUrl.replace(/\/$/, "");
  setHeader(event, "content-type", "text/plain; charset=utf-8");

  const lines = ["User-Agent: *", "Allow: /"];
  if (siteUrl) lines.push(`Sitemap: ${siteUrl}/sitemap.xml`);
  return `${lines.join("\n")}\n`;
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2026-10-19",
  modules: ["@nuxt/eslint"],
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  app: {
    head: {
      htmlAttrs: { lang: "ru" },
      titleTemplate: "%s — Кафедра бухгалтерского учета и контроллинга",
      meta: [
        {
          name: "description",
          content: "Кафедра бухгалтерского учета и контроллинга РГЭУ (РИНХ).",
        },
      ],
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },
});

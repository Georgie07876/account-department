import type { NavItem, SiteSettings } from "~/types/content";

export const site: SiteSettings = {
  university: "Ростовский государственный экономический университет",
  faculty: "Учетно-экономический факультет",
  department: "Кафедра бухгалтерского учета и контроллинга",
  phone: "+7 (863) 240-29-86",
  phoneHref: "tel:+78632402986",
  email: "RGEUuef509@yandex.ru",
  address: "Большая Садовая, 69 · ауд. 509",
  vk: "https://vk.ru/buxychet_rsue",
  universityUrl: "https://rsue.ru/",
};

export const nav: NavItem[] = [
  { to: "/", label: "Главная" },
  { to: "/about", label: "О кафедре" },
  { to: "/programs", label: "Образование" },
  { to: "/science", label: "Наука" },
  { to: "/students", label: "Студентам" },
  { to: "/partners", label: "Партнёры" },
  { to: "/contacts", label: "Контакты" },
  { to: "/history", label: "95 лет кафедре", anniversary: true },
];

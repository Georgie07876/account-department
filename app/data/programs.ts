import type { Program } from "~/types/content";

export const programs: Program[] = [
  {
    slug: "bachelor-1",
    level: "bachelor",
    levelLabel: "Бакалавриат",
    code: "38.03.01",
    direction: "Экономика",
    title: "Учет и контроль в управлении бизнесом",
    lead: "Подготовка к работе с учетной информацией и задачами контроля в организациях.",
    focus: ["Учетная информация", "Внутренний контроль", "Управление бизнесом"],
  },
];

export function getProgram(slug: string) {
  return programs.find((program) => program.slug === slug);
}

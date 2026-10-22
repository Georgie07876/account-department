import { programs } from "~/data/programs";

export const publicRoutes = [
  "/",
  "/about",
  "/programs",
  "/science",
  "/students",
  "/partners",
  "/contacts",
  "/history",
  "/ecosystem",
  "/career-guidance",
  "/project-intensive",
  "/sources",
  ...programs.map((program) => `/programs/${program.slug}`),
];

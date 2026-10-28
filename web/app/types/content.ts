export interface NavItem {
  to: string;
  label: string;
  anniversary?: boolean;
}

export interface SiteSettings {
  university: string;
  faculty: string;
  department: string;
  phone: string;
  phoneHref: string;
  email: string;
  address: string;
  vk: string;
  universityUrl: string;
}

export interface Program {
  slug: string;
  level: "bachelor" | "master";
  levelLabel: string;
  code: string;
  direction: string;
  title: string;
  lead: string;
  focus: string[];
  presentationHref?: string;
}

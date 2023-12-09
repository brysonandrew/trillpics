export const TITLE_BASE = 'Bryson A.';
export const SECTION_TITLES = {
  build: 'Building websites and apps',
  tech: 'With the power of',
  projects: 'Latest projects',
  contact: 'Get in touch',
} as const;
export type TSectionTitleKey = keyof typeof SECTION_TITLES;
export type TSectionTitle =
  (typeof SECTION_TITLES)[TSectionTitleKey];

const PROJECTS_TITLE = 'Projects';
const CONTACT_TITLE = 'Contact';

export const PAGE_TITLES = [
  PROJECTS_TITLE,
  CONTACT_TITLE,
] as const;
export type TPageTitle = (typeof PAGE_TITLES)[number];
export const INTRO_ID = 'intro';
export const TECH_ID = 'tech';
export const PROJECTS_ID = PROJECTS_TITLE.toLowerCase();
export const CONTACT_ID = CONTACT_TITLE.toLowerCase();

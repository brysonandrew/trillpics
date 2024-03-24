import * as Pages from '@pages/index';

export type TPages = typeof Pages;
export type TPageTitle = keyof TPages;
export type TPage = TPages[TPageTitle];

export const INDEX_PAGES = [
  "index",
  "home",
] as const;
export const isIndex = (p: string) =>
  INDEX_PAGES.some(
    (v) => v === p.toLowerCase()
  );
export const routeRowIndexCheck = <
  T extends string
>(
  path: T
) => {
  if (isIndex(path)) {
    return `
    index: true,`;
  }
  return '';
};

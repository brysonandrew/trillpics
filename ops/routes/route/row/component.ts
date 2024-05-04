export const routeRowComponent = <
  T extends string
>(
  Component: T
) => {
  return `Component: ${Component}` as const;
};

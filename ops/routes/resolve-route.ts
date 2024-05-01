import { RouteObject } from "react-router";
import { INDEX_PAGES } from "~ops/routes/config";

export const pathParts = (
  value: string
) => value.split(/[/-]/g);
export const isIndex = (p: string) =>
  INDEX_PAGES.some(
    (v) => v === p.toLowerCase()
  );

export const resolveRoute = <
  T extends string
>(
  path: T
) => {
  const parts = pathParts(path);
  const key = parts.join("-");
  const Component = parts
    .map(
      (v) =>
        `${v[0].toUpperCase()}${v.slice(
          1
        )}`
    )
    .join("");
  const indexRow = isIndex(path)? `
    index: true,`
    : "";
  const page = `{${indexRow}
    Component: ${Component},
    path: "/${isIndex(path) ? "" : path}",
  },
` as const;

  return page;
};

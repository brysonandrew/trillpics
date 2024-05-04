import { isIndex } from "~ops/routes/config";

export const pathParts = (
  value: string
) => value.split(/[/-]/g);

export const resolveRoute = <
  T extends string
>(
  path: T
) => {
  const parts = pathParts(path);
  const Component = parts
    .map(
      (v) =>
        `${v[0]?.toUpperCase()}${v.slice(
          1
        )}`
    )
    .join("");
  const indexRow = isIndex(path) ? `
    index: true,`
    : "";
  const page = `{${indexRow}
    Component: ${Component},
    path: "/${path}",
  },
` as const;

  return page;
};

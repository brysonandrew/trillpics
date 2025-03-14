import { capitalizeItem } from "~ops/format/capitalize";
import { resolveRoute } from "~ops/routes/route";
import { routeRowComponent } from "~ops/routes/route/row/component";
import {
  isIndex,
  routeRowIndexCheck,
} from "~ops/routes/route/row/index-check";
import { routeRowPath } from "~ops/routes/route/row/path";
import { symmetryBracesCurly } from "~ops/template/symmetry/braces/curly";

export const pathParts = (
  value: string
) => value.split(/[/-]/g);

export const resolveRouteFromPath = <
  T extends string
>(
  path: T
) => {
  const dirPath = `/${
    isIndex(path) ? "" : path
  }`;
  const parts = pathParts(path);
  const Component = parts
    .map(capitalizeItem)
    .join("");
  const indexRow =
    routeRowIndexCheck(dirPath);
  // const pathRow = routeRowPath(path);
  // const rowComponent =
  //   routeRowComponent(Component);
  // const page = [
  //   indexRow,
  //   pathRow,
  //   rowComponent,
  // ] as const;
  const result = symmetryBracesCurly(
    `${resolveRoute(dirPath, Component)}`
  );
  return `
  ${indexRow}
  ${result}
`;
};

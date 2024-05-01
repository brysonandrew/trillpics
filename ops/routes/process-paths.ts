import { parse } from "path";
import { RouteObject } from "react-router";
import {
  PAGES_VARIABLE_NAME,
  REACT_ROUTER_IMPORT_ROW,
  ROUTES_INDEX_FILE,
  TRoutePages,
} from "~ops/routes/config";
import {
  isIndex,
  resolveRoute,
} from "~ops/routes/resolve-route";
import { endTemplateArray } from "~ops/template";

export const capitalize = (
  word: string | null
) =>
  word
    ? `${word[0].toUpperCase()}${word
        .toLowerCase()
        .slice(1)}`
    : "";
export const capslock = (
  word: string | null
) => (word ? word.toUpperCase() : "");
export const dirToSnake = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map(capslock)
    .join("_");
export const dirToPascal = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map(capitalize)
    .join("");

export const dirToKebab = <
  I extends string
>(
  value: I
) =>
  value
    .split("/")
    .map((v) => v.toLowerCase())
    .join("-");

export const processPaths = (
  paths: string[]
) =>
  paths.reduce(
    (
      a: TRoutePages,
      path,
      index,
      { length: count },
      isFirst = index === 0,
      isLast = index === count - 1
    ) => {
      const { dir } = parse(path);
      const pascal = dirToPascal(dir);
      const snake = dirToSnake(dir);

      a.pagesIndex += `export { ${pascal}${
        isIndex(dir) ? " as Index" : ""
      } } from '~/pages/${dir}';\n`;

      a.routesPages = `import { ${pascal} } from '~/pages/${dir}';\n${a.routesPages}`;

      if (isFirst) {
        a.routesPages += `
export const ${PAGES_VARIABLE_NAME}: RouteObject[] = [`;
      }

      const nextRoute: RouteObject =
        resolveRoute(dir);
      a.routesPages += nextRoute;

      if (isLast) {
        a.routesPages = `${REACT_ROUTER_IMPORT_ROW}
${a.routesPages}`;
        a.routesPages +=
          endTemplateArray();
      }

      a.routesIndex = `${a.routesIndex}
export const ${snake}_ROUTE = "/${dir}";`;

      return a;
    },
    {
      pagesIndex: "",
      routesPages: "",
      routesIndex: ROUTES_INDEX_FILE,
    }
  );

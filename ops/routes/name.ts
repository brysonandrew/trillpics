import { resolveTypeDeclaration } from "~ops/template/array/type/declaration";
import { MODULE_DECLARATIONS } from "~ops/template/declarations/constants";

export const ROUTES_VARIABLE_NAME =
  "ROUTES";
const TYPE_DECLARATION =
  resolveTypeDeclaration(
    "RouteObject[]"
  );
export const NAME =
  `${MODULE_DECLARATIONS["export const"]} ${ROUTES_VARIABLE_NAME}${TYPE_DECLARATION}` as const;

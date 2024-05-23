import { SHELL_ROUTE } from "~ops/routes/shell";
import { symmetryBracesCurly } from "~ops/template/symmetry/braces/curly";
import { symmetryBracesSquare } from "~ops/template/symmetry/braces/square";

const APP_ROUTE_OBJ =
  symmetryBracesCurly(SHELL_ROUTE);

export const VALUE =
  symmetryBracesSquare(APP_ROUTE_OBJ);

import { resolveRoute } from "~ops/routes/route";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { symmetryBracesCurly } from "~ops/template/symmetry/braces/curly";
import pkg from "~root/package.json";
const dependencies = pkg.dependencies;

const SOURCE =
  "@brysonandrew/routes-not-found";

if (!(SOURCE in dependencies)) {
  console.log("NOT FOUND NOT FOUND");
}

const NAME = "NotFound";
export const ROWS = symmetryBracesCurly(
  resolveRoute("*", NAME)
);
export const IMPORT_ROW =
  resolveModuleNamedImport(
    NAME,
    SOURCE
  );
export const NOT_FOUND = {
  ROWS,
  IMPORT_ROW,
} as const;

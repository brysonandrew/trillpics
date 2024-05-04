import { TModuleDeclarationKey } from "~ops/template/declarations/types";
import { templateEnd } from "~ops/template/end";
import { resolveModuleNamedImport } from "~ops/template/module/named/import";
import { wrapModuleNamed } from "~ops/template/wrap/named";
import { wrapQuote } from "~ops/template/wrap/quote";

export const resolveModuleNamed = <
  D extends TModuleDeclarationKey,
  N extends string,
  S extends string
>(
  declaration: D,
  name: N,
  source: S
) =>
  `${declaration} ${wrapModuleNamed(
    name
  )} from ${templateEnd(
    wrapQuote(source)
  )}` as const;

export const resolveModuleNamedImports =
  (names: string[], source: string) =>
    resolveModuleNamedImport(
      names.join("\n"),
      source
    );

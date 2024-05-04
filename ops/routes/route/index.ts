import { templateAssignmentColon } from "~ops/template/assignment/colon";
import { symmetryQuote } from "~ops/template/symmetry/quote";

// export const pathParts = (
//   value: string
// ) => value.split(/[/-]/g);

export const resolveRoute = <
  P extends string,
  T extends string,
>(
  path: P,
  Component: T,
) => {
  const pathPair =
    templateAssignmentColon(
      "path",
      symmetryQuote(path)
    );
  const componentPair =
    templateAssignmentColon(
      "Component",
      Component
    );
  // const rows = [
  //   pathPair,
  //   componentPair,
  // ] as const;

  const result = 
`${pathPair},
${componentPair}` as const;

  return result;
};

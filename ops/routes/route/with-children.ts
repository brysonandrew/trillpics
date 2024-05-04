import { resolveRoute } from "~ops/routes/route";
import { templateAssignmentColon } from "~ops/template/assignment/colon";
import { symmetryBracesSquare } from "~ops/template/symmetry/braces/square";

export const resolveRouteWithChildren =
  <
    P extends string,
    T extends string,
    C extends string
  >(
    path: P,
    Component: T,
    children: C
  ) => {
    const content = resolveRoute<P, T>(
      path,
      Component
    );
    const childrenPair =
      templateAssignmentColon(
        `children`,
        symmetryBracesSquare(children)
      );

    return `${content},
  ${childrenPair}` as const;
  };

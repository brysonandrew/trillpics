import { makeRect } from "@remotion/shapes";
import { DIMENSIONS } from "~/remotion/constants";

const {
  path,
  transformOrigin,
  instructions,
  ...rectProps
} = makeRect(DIMENSIONS);

export const Square = ({
  color,
}: {
  color: string;
}) => (
  <svg
    {...rectProps}
    style={{ transformOrigin }}
    fill={color}
  >
    <path d={path} />
  </svg>
);

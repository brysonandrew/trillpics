import type { FC } from "react";
import { Duotone2 } from "~/shell/init/svg/filters/_filters-pismo/Duotone";
import { Glass } from "./Glass";
import { GlowFilter } from "./GlowFilter";
import { Gradient } from "./Gradient";
import { Mirror } from "./Mirror";
import { TurbulanceFilter } from "./TurbulanceFilter";

type TProps = { phase: string };
export const Filters: FC<TProps> = ({
  phase,
}) => (
  <svg
    width="0"
    height="0"
    viewBox="0 0 0 0"
  >
    <Mirror phase={phase} />
    <TurbulanceFilter />
    <Gradient />
    <GlowFilter />
    <Glass phase={phase} />
    <Duotone2 />
  </svg>
);

import type { FC } from "react";
import { resolveFilterAttr } from "@brysonandrew/utils-attributes";

export const GLASS_ID_1 = "glass";

const RANDOM = ~~Math.random() * 3.99;
const COLORS = [...Array(3)].map(
  () => ~~(Math.random() * 360)
);
export const GLASS_ID_1_PROPS =
  resolveFilterAttr(GLASS_ID_1);
  
type TProps = { phase: string };
export const Glass: FC<TProps> = ({
  phase,
}) => (
  <filter id={GLASS_ID_1}>
    <feGaussianBlur
      stdDeviation="5"
      result="bevel_blur"
    />
    <feSpecularLighting
      result="bevel_lighting"
      in="bevel_blur"
      specularConstant="2.4"
      specularExponent="13"
      lightingColor="rgba(255,255,255,.4)"
    >
      <feDistantLight
        azimuth="25"
        elevation="40"
      />
    </feSpecularLighting>
    <feComposite
      in="bevel_lighting"
      in2="SourceGraphic"
      operator="in"
      result="bevel_complete"
    />
    {phase === "open" && (
      <feColorMatrix
        in="bevel_complete"
        type="hueRotate"
        values={String(COLORS[RANDOM])}
      />
    )}
  </filter>
);

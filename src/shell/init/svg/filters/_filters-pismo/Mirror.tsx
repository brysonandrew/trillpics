import type { FC } from "react";

const RANDOM = ~~Math.random() * 3.99;
const COLORS = [...Array(3)].map(() => ~~(Math.random() * 360));

type TProps = { phase: string };
export const Mirror: FC<TProps> = ({ phase }) => (
  <filter id="mirror">
    <feTurbulence
      type="turbulence"
      in="SourceGraphic"
      baseFrequency="0.0 0.8"
      numOctaves="2"
      result="turbulence"
    />

    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="20"
      xChannelSelector="R"
      yChannelSelector="G"
      result="displacement"
    />
    <feGaussianBlur in="displacement" stdDeviation="18 12" numOctaves="2" result="blur" />
    <feOffset in="blur" dx="-12" dy="-10" result="offset" />
    {/* {phase === "open" && <feColorMatrix in="A" type="hueRotate" values={COLORS[RANDOM] + ""} />} */}
  </filter>
);

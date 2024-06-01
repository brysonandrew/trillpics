import type { FC } from "react";
import {
  motion,
  MotionValue,
} from "framer-motion";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { MOTION_BLUR_FILTER_X_ID } from "~/shell/init/svg/filters/blur/constants";
import { TPropsWithChildren } from "@brysonandrew/config-types";

type TProps = TPropsWithChildren<{
  id?: string;
  tType?: string;
  tBase?: string;
  mScale?: number;
  dScale?: number;
  turbulence: MotionValue;
  blur: MotionValue;
  morph: number;
  displacement: number;
}>;
export const FiltersBlurX: FC<
  TProps
> = ({
  id = MOTION_BLUR_FILTER_X_ID,
  tType = "turbulence", // "fractalNoise",
  dScale = 12,
  turbulence,
  blur,
  morph,
  displacement,
  children,
}) => {
  let o = -(dScale / 2);
  if (tType === "fractalNoise") {
    o = 0;
  }
  console.log(morph)
  return (
    <SvgWrap>
      <filter id={id}>
        <motion.feTurbulence
          type={tType}
          baseFrequency={turbulence}
          numOctaves={1}
          result="T0"
        />
        <feOffset
          dx={o}
          dy={o}
          in="SourceGraphic"
          result="sgo"
        />
        <feMorphology
          in="sgo"
          operator="dilate"
          radius={morph}
          result="M0"
        />
        <motion.feGaussianBlur
          in="M0"
          stdDeviation={blur}
          result="B0"
        />
        <motion.feDisplacementMap
          in="B0"
          in2="T0"
          scale={displacement}
        />
      </filter>
    </SvgWrap>
  );
};

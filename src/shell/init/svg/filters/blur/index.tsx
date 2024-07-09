import type { FC } from "react";
import {
  motion,
  MotionValue,
} from "framer-motion";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";

type TProps ={
  id: string;
  tType?: string;
  tBase?: string;
  mScale?: number;
  dScale?: number;
  turbulence: MotionValue;
  blur: MotionValue;
  morph: number;
  displacement: number;
  offsetX?: MotionValue | number;
  offsetY?: MotionValue | number;
}
export const FiltersBlur: FC<
  TProps
> = ({
  id,
  tType =  "fractalNoise",
  turbulence,
  blur,
  morph,
  displacement,
  offsetX=0,
  offsetY=0,
}) => {
  return (
    <SvgWrap>
      <filter id={id}>
        <motion.feTurbulence
          type={tType}
          baseFrequency={turbulence}
          numOctaves={1}
          result="T0"
        />
        <motion.feOffset
          dx={offsetX}
          dy={offsetY}
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

import {
  FC,
  SVGProps,
  useState,
} from "react";
import {
  TSvgPropsAttr,
  TSvgFilterPropsAttr,
  TDirectionProps,
  TIdProps,
  resolveBlurMotionKeys,
} from "@brysonandrew/svg-filter";
import {
  TSvgFilterMorphologyProps,
  TSvgDisplacementProps,
  TSvgElementProps,
} from "@brysonandrew/config-types";
import { useEventListener } from "@brysonandrew/hooks-events";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { TSelfDestrucTPicsBaseRow } from "~/shell/global/svg/filters/blur/presence/self-destruct";

const DUR = 0.6;
const TURBULENCE_ANIMATION = {
  keyTimes: "0;1",
  fill: "freeze",
  begin: `0s`,
  values: `${"1000"};${"0"}`,
  dur: `${DUR}s`,
  calcMode: "spline",
  keySplines: "0.185,0.475,0.6,0.995",
} as const;
const BLUR_ANIMATION = {
  begin: `0s`,
  values: `${"1 2"};${"0 0"}`,
  dur: `${0.2}s`,
  calcMode: "spline",
  keySplines: "0.185,0.475,0.6,0.995",
  keyTimes: "0;1",
  fill: "freeze",
} as const;
export type TTurbulencePropsAttr = {
  turbulenceProps: SVGProps<SVGFETurbulenceElement>;
};
export type TMorphologyPropsAttr = {
  morphologyProps: TSvgFilterMorphologyProps;
};
export type TDisplacementPropsAttr = {
  displacementProps: TSvgDisplacementProps;
};
export type TGaussianBlurPropsAttr = {
  gaussianBlurProps: SVGProps<SVGFEGaussianBlurElement>;
};
export type TSvgElementPropsAttr = {
  elementProps: TSvgElementProps;
};
type TElementProps = TSvgPropsAttr &
  TSvgFilterPropsAttr &
  TGaussianBlurPropsAttr &
  TMorphologyPropsAttr &
  TDisplacementPropsAttr &
  TTurbulencePropsAttr;
export type TBlurPresenceProps =
  TSelfDestrucTPicsBaseRow &
    Partial<TElementProps> &
    TIdProps &
    TDirectionProps & {
      size?: number;
      intensity?: number;
      tNumOctaves?: number;
      tSeed?: number;
      mRadius?: number;
      isVertical?: boolean;
      turbulenceAnimation?: typeof TURBULENCE_ANIMATION;
      blurAnimation?: typeof BLUR_ANIMATION;
      turbulence?: `${number} ${number}`;
      blur?: `${number} ${number}`;
      onDone?(event: Event): void;
    };
export const BlurPresence: FC<
  TBlurPresenceProps
> = ({
  svgProps,
  intensity = 200,
  id = "BlurPresence",
  tNumOctaves = 4,
  tSeed = 2,
  mRadius = 10,
  filterProps,
  turbulenceProps,
  morphologyProps,
  displacementProps,
  gaussianBlurProps,
  turbulence = "0 1",
  blur = "0 1",
  onDone,
  turbulenceAnimation,
  blurAnimation,
  size = 100,
}) => {
  const {
    TURBULANCE_KEY,
    MORPH_KEY,
    DISPLACEMENT_KEY,
  } = resolveBlurMotionKeys(id);

  const [
    lastAnimatedElement,
    setLastAnimatedElement,
  ] =
    useState<SVGAnimateTransformElement | null>(
      null
    );
  useEventListener<
    "endEvent",
    SVGAnimateTransformElement
  >(
    "endEvent",
    (event) => {
      if (onDone) {
        onDone(event);
      }
    },
    {
      current: lastAnimatedElement,
    }
  );
  return (
    <SvgWrap {...svgProps}>
      <filter
        id={id}
        x="-25%"
        y="-25%"
        height="150%"
        width="150%"
        {...filterProps}
      >
        <feTurbulence
          baseFrequency={turbulence}
          numOctaves={tNumOctaves}
          seed={tSeed}
          type="fractalNoise"
          in="SourceGraphic"
          result={TURBULANCE_KEY}
          {...turbulenceProps}
        />
        <feMorphology
          in={TURBULANCE_KEY}
          operator="dilate" // erode
          radius={mRadius}
          result={MORPH_KEY}
          {...morphologyProps}
        />
        <feDisplacementMap
          in2={MORPH_KEY}
          in="SourceGraphic"
          scale={intensity}
          xChannelSelector="R"
          yChannelSelector="G"
          result={DISPLACEMENT_KEY}
          {...displacementProps}
        >
          <animate
            ref={(
              instance: SVGAnimateTransformElement
            ) => {
              if (
                instance &&
                !lastAnimatedElement
              ) {
                setLastAnimatedElement(
                  instance
                );
              }
            }}
            attributeName="scale"
            attributeType="XML"
            type="scale"
            {...TURBULENCE_ANIMATION}
            {...turbulenceAnimation}
          />
        </feDisplacementMap>
        <feGaussianBlur
          in={DISPLACEMENT_KEY}
          stdDeviation={blur}
          {...gaussianBlurProps}
        >
          <animate
            attributeName="stdDeviation"
            attributeType="XML"
            type="stdDeviation"
            {...BLUR_ANIMATION}
            {...blurAnimation}
          />
        </feGaussianBlur>
      </filter>
    </SvgWrap>
  );
};

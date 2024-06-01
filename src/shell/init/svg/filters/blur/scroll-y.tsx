import {
  useMotionTemplate,
  useMotionValueEvent,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useInitContext } from "~/shell/init/context";
import { MOTION_BLUR_FILTER_SCROLL_Y_ID } from "~/shell/init/svg/filters/blur/constants";
import { FiltersBlur } from "~/shell/init/svg/filters/blur";

type TProps = {
  tType?: string;
  dScale?: number;
};
export const FiltersBlurScrollY = ({
  tType = "turbulence", // "fractalNoise",
  dScale = 11,
}: TPropsWithChildren<TProps>) => {
  const { main } =
    useInitContext();
  const motionValue = main.blur.value.scrollY;
  const y10 =  useTransform(motionValue,v => Math.abs(v * 10));
  const y20 =  useTransform(motionValue,v => Math.abs(v * 20));

  const blur = useMotionTemplate`${0.01} ${y10}`;
  const turbulence = useMotionTemplate`${0.01} ${y20}`;

  return (
    <FiltersBlur
      id={
        MOTION_BLUR_FILTER_SCROLL_Y_ID
      }
      offsetY={motionValue}
      turbulence={turbulence}
      blur={blur}
      morph={0.1}
      displacement={dScale}
    />
  );
};

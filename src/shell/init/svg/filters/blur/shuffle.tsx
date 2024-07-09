import {
  useMotionTemplate,
  useVelocity,
} from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useContextInit } from "~/shell/init/context";
import { MOTION_BLUR_SHUFFLE_ID } from "~/shell/init/svg/filters/blur/constants";
import { FiltersBlur } from "~/shell/init/svg/filters/blur";

type TProps = {
  tType?: string;
  dScale?: number;
};
export const FiltersBlurShuffle = ({
  tType = "turbulence", // "fractalNoise",
  dScale = 8,
}: TPropsWithChildren<TProps>) => {
  const { main } = useContextInit();
  const motionValue =
    main.blur.value.shuffle;
  const velocity = useVelocity(
    motionValue
  );

  const acceleration =
    useVelocity(velocity);
  const turbulence = useMotionTemplate`${acceleration} ${velocity}`;
  const blur = useMotionTemplate`${velocity} ${motionValue}`;

  return (
    <FiltersBlur
      id={MOTION_BLUR_SHUFFLE_ID}
      turbulence={turbulence}
      blur={blur}
      morph={0.1}
      offsetX={motionValue}
      offsetY={motionValue}
      displacement={dScale}
    />
  );
};

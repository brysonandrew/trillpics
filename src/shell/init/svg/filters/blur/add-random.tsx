import {
  useMotionTemplate,
  useVelocity,
} from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useContextInit } from "~/shell/init/context";
import {
  MOTION_BLUR_ADD_RANDOM_ID,
  MOTION_BLUR_SHUFFLE_ID,
} from "~/shell/init/svg/filters/blur/constants";
import { FiltersBlur } from "~/shell/init/svg/filters/blur";

type TProps = {
  tType?: string;
  dScale?: number;
};
export const FiltersBlurAddRandom = ({
  tType = "turbulence", // "fractalNoise",
  dScale = 12,
}: TPropsWithChildren<TProps>) => {
  const { main } = useContextInit();
  const motionValue =
    main.blur.value.addRandom;
  const velocity = useVelocity(
    motionValue
  );

  const acceleration =
    useVelocity(velocity);
  const turbulence = useMotionTemplate`${acceleration} ${velocity}`;
  const blur = useMotionTemplate`${velocity} ${motionValue}`;

  return (
    <FiltersBlur
      id={MOTION_BLUR_ADD_RANDOM_ID}
      turbulence={turbulence}
      blur={blur}
      morph={0.1}
      displacement={dScale}
    />
  );
};

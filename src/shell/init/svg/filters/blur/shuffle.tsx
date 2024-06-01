import {
  useMotionTemplate,
  useVelocity,
} from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useInitContext } from "~/shell/init/context";
import { MOTION_BLUR_SHUFFLE_ID } from "~/shell/init/svg/filters/blur/constants";
import { FiltersBlurX } from "~/shell/init/svg/filters/blur/x";

type TProps = {
  tType?: string;
  dScale?: number;
};
export const FiltersBlurShuffle = ({
  tType = "turbulence", // "fractalNoise",
  dScale = 8,
}: TPropsWithChildren<TProps>) => {
  const { main } = useInitContext();
  const motionValue =
    main.blur.value.shuffle;
  const velocity = useVelocity(
    motionValue
  );

  const acceleration =
    useVelocity(velocity);
  const turbulence = useMotionTemplate`${acceleration} ${velocity}`;
  const blur = useMotionTemplate`${velocity} ${motionValue}`;
  let o = -(dScale / 2);
  if (tType === "fractalNoise") {
    o = 0;
  }
  return (
    <FiltersBlurX
      id={MOTION_BLUR_SHUFFLE_ID}
      turbulence={turbulence}
      blur={blur}
      morph={1}
      displacement={dScale}
    />
  );
};

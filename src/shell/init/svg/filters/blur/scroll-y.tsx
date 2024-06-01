import {
  useMotionTemplate,
  useVelocity,
} from "framer-motion";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { useInitContext } from "~/shell/init/context";
import { MOTION_BLUR_FILTER_SCROLL_Y_ID, MOTION_BLUR_SHUFFLE_ID } from "~/shell/init/svg/filters/blur/constants";
import { FiltersBlur } from "~/shell/init/svg/filters/blur";

type TProps = {
  tType?: string;
  dScale?: number;
};
export const FiltersBlurScrollY = ({
  tType = "turbulence", // "fractalNoise",
  dScale = 11,
}: TPropsWithChildren<TProps>) => {
  const { main } = useInitContext();
  const motionValue = main.blur.value.scrollY;
  const velocity = useVelocity(
    motionValue
  );
  const acceleration =
    useVelocity(velocity);
  const turbulence = useMotionTemplate`${velocity} ${acceleration}`;
  const blur = useMotionTemplate`${motionValue} ${velocity}`;
  let o = -(dScale / 2);
  if (tType === "fractalNoise") {
    o = 0;
  }
  return (
    <FiltersBlur
      id={MOTION_BLUR_FILTER_SCROLL_Y_ID}
      turbulence={turbulence}
      blur={blur}
      morph={0.1}
      displacement={dScale}
    />
  );
};

import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { DirectorsModeControlsCounter } from "~/shell/pics/pic/directors-mode/controls/counter";
import {
  TUsePicDirectorsModeControlsConfig,
  usePicDirectorsModeControls,
} from "~/shell/pics/pic/directors-mode/controls/use-pic-directors-mode";
import { TUseBoxChildProps } from "~/shell/pics/pic/box/use-box";

export type TPicDirectorsModeControlsProps =
  TUsePicDirectorsModeControlsConfig &
  Pick<TUseBoxChildProps, "isHover" | 'videoOrder'> ;
export const PicDirectorsModeControls: FC<
  TPicDirectorsModeControlsProps
> = ({ videoOrder, ...props }) => {
  const picDirectorsModeControlsResult =
    usePicDirectorsModeControls({ videoOrder });
  return (
    <motion.div
      key="video mode counter"
      className="absolute left-1/2 top-1/2 -translate-1/2"
      {...FADE_PRESENCE}
    >
      <DirectorsModeControlsCounter
        {...picDirectorsModeControlsResult}
        {...props}
      />
    </motion.div>
  );
};

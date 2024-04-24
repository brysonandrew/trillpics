import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { DirectorsModeCounter } from "~/shell/pics/pic/directors-mode/counter";
import {
  TUsePicDirectorsModeConfig,
  usePicDirectorsMode,
} from "~/shell/pics/pic/directors-mode/use-pic-directors-mode";
import { TUseBox } from "~/shell/pics/pic/box";

export type TPicDirectorsModeProps =
  TUsePicDirectorsModeConfig &
  Pick<TUseBox, "isHover" | 'videoOrder'> ;
export const PicDirectorsMode: FC<
  TPicDirectorsModeProps
> = ({ videoOrder, ...props }) => {
  const picDirectorsModeResult =
    usePicDirectorsMode({ videoOrder });
  return (
    <motion.div
      key="video mode counter"
      className="absolute left-1/2 top-1/2 -translate-1/2"
      {...FADE_PRESENCE}
    >
      <DirectorsModeCounter
        {...picDirectorsModeResult}
        {...props}
      />
    </motion.div>
  );
};

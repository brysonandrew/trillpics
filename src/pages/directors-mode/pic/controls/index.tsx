import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { DirectorsModeControlsCounter } from "~/pages/directors-mode/pic/controls/counter";
import { TPicProps } from "~/shell/pics/pic";

export type TPicDirectorsModeControlsProps =
  TPicProps;
export const PicDirectorsModeControls: FC<
  TPicDirectorsModeControlsProps
> = (props) => {
  return (
    <motion.div
      key="video mode counter"
      className="fill"
      {...FADE_PRESENCE}
    >
      <DirectorsModeControlsCounter
        {...props}
      />
    </motion.div>
  );
};

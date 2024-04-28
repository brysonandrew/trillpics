import type { FC } from "react";
import { motion } from "framer-motion";
import { FADE_PRESENCE } from "~/constants/animation";
import { DirectorsModeControlsCounter } from "~/pages/directors-mode/pic/controls/counter";
import { usePicDirectorsModeControls } from "~/pages/directors-mode/pic/controls/use-pic-directors-mode";
import { useTrillPicsStore } from "~/store";
import { TPicProps } from "~/shell/pics/pic";

export type TPicDirectorsModeControlsProps =
  TPicProps;
export const PicDirectorsModeControls: FC<
  TPicDirectorsModeControlsProps
> = ({ name }) => {
  const { videoPics } =
    useTrillPicsStore(
      ({ videoPics }) => ({
        videoPics,
      })
    );
  const videoOrder =
    videoPics.indexOf(name);
  const picDirectorsModeControlsResult =
    usePicDirectorsModeControls({
      videoOrder,
    });
  return (
    <motion.div
      key="video mode counter"
      className="absolute left-1/2 top-1/2 -translate-1/2"
      {...FADE_PRESENCE}
    >
      <DirectorsModeControlsCounter
        {...picDirectorsModeControlsResult}
      />
    </motion.div>
  );
};

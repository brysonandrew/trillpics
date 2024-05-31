import { motion } from "framer-motion";
import { useTrillPicsStore } from "~/store/middleware";
import { PRESENCE_OPACITY } from "@brysonandrew/motion-config-constants";
import clsx from "clsx";

export const OVERFLOW_HIDDEN =
  "overflow: hidden;";

export const VideoPlayer_ScreenGenerate =
  () => {
    const { progress } =
      useTrillPicsStore(
        ({ progress }) => ({
          progress,
        })
      );
    return (
      <motion.div
        className="fill flex flex-col items-center justify-center inset-2 -outline-filter"
        {...PRESENCE_OPACITY}
      >
        <div className="fill rounded-lg _box-dots opacity-10" />
        <div className="fill rounded-lg _gradient-radial opacity-20" />

        <h3 className="font-slab text-7xl uppercase">
          generating video
        </h3>
        <h4
          className={clsx(
            "font-slab text-8xl",
            progress === 100
              ? "_gradient-text text-white"
              : ""
          )}
        >
          {progress}%
        </h4>
      </motion.div>
    );
  };

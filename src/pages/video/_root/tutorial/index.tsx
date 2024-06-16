import type { FC } from "react";
import { motion } from "framer-motion";
import { OverlayCenter } from "~/components/layout/overlay/center";
import { PRESENCE_OPACITY_04 } from "~/constants/animation";

export const Video_RootTutorial: FC =
  () => {
    return (
      <OverlayCenter>
        <motion.div
          className="fill bg-main"
          style={{
            filter: "blur(28px)",
          }}
          {...PRESENCE_OPACITY_04}
        />
        <h3
          style={{
            transform:
              "translateY(-16vh)",
          }}
          className="relative dark:text-black text-white uppercase font-slab tracking-wide text-2xl md:text-4xl lg:text-6xl text-center _gradient-text"
        >
          Click on the pics to add them
          to your video
        </h3>
      </OverlayCenter>
    );
  };

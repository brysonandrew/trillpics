import type { FC } from "react";
import { motion } from "framer-motion";

export const BlurTest: FC = () => {
  return (
    <div>
      <div
        className="fill opacity-50 _bi-radial"
        // style={EMBERS_FILTER_SVG_PROPS}
      />
      <motion.div
        className="fill flex flex-col text-9xl center font-black"
        style={
          {
            // ...EMBERS_FILTER_SVG_PROPS,
          }
        }
      >
        <span className="relative text-green">
          hello world
        </span>
        <span className="relative text-blue">
          hello world
        </span>
        <span className="relative text-red">
          hello world
        </span>
        <span className="relative opacity-50">
          hello world
        </span>
      </motion.div>
    </div>
  );
};

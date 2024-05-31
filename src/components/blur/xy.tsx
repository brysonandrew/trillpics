import type {
  FC,
  PropsWithChildren,
} from "react";
import { useContextReady } from "~/shell/ready/context";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/shell/init/svg/filters/blur/constants";
import { EMBERS_FILTER_SVG_PROPS } from "~/shell/init/svg/filters/embers";
import { ShellGlobalBackground } from "~/shell/global/background";
import { motion } from "framer-motion";

export const BlurXyWrap: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
      // className="fill"
      className="fill bg-white"
      style={{
        // ...EMBERS_FILTER_SVG_PROPS,
        ...MOTION_BLUR_FILTER_X_PROPS,
      }}
    >
      <ShellGlobalBackground />
      {children}
  
      {/* <motion.div
        className="fill flex flex-col text-6xl center font-black"
        style={{
          scale: 2,
          ...EMBERS_FILTER_SVG_PROPS,
          // ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
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
      </motion.div> */}
      
    </div>
  );
};

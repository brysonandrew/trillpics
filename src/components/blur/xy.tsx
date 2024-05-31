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

export const BlurXyWrap: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
    className="fill"
      // className="fill flex flex-col text-8xl center"
      style={{
        // ...EMBERS_FILTER_SVG_PROPS,
        ...MOTION_BLUR_FILTER_X_PROPS,
      }}
    >
      {/* <ShellGlobalBackground />
      <span className="relative">
        hello world
      </span>
      <span className="relative opacity-50">
        hello world
      </span> */}
      <div
        className="fill"
        style={{
          ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
      >
        {children}
      </div>
    </div>
  );
};

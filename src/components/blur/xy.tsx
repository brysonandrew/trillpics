import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
  MOTION_BLUR_SHUFFLE_ID,
  MOTION_BLUR_SHUFFLE_PROPS,
} from "~/shell/init/svg/filters/blur/constants";
import { ShellGlobalBackground } from "~/shell/global/background";

export const BlurXyWrap: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    // <div
    //   className="fill"
    //   style={{
    //     ...MOTION_BLUR_SHUFFLE_PROPS,
    //   }}
    // >
      <div
        className="fill"
        style={{
          ...MOTION_BLUR_FILTER_Y_PROPS,
        }}
      >
        <ShellGlobalBackground />
        {children}
      </div>
    // </div>
  );
};

import type {
  FC,
  PropsWithChildren,
} from "react";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/components/blur/constants";

export const BlurXy: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
      className="fill"
      style={{
        ...MOTION_BLUR_FILTER_X_PROPS,
      }}
    >
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

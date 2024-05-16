import type {
  FC,
  PropsWithChildren,
} from "react";
import { useContextGrid } from "~/context";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/shell/global/svg/filters/blur/constants";

export const BlurXyWrap: FC<
  PropsWithChildren
> = ({ children }) => {
  const { headerValue, updateHeader } =
    useContextGrid();
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
        // ref={(instance) => {
        //   if (
        //     instance &&
        //     headerValue === null
        //   ) {
        //     updateHeader(instance);
        //   }
        // }}
      >
        {children}
      </div>
    </div>
  );
};

import type {
  FC,
  PropsWithChildren,
} from "react";
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
    <div className="fill" style={{}}>
      <ShellGlobalBackground />
      {children}
    </div>
    // </div>
  );
};

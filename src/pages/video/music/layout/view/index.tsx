import type {
  FC,
  PropsWithChildren,
} from "react";
import { LayoutViewBackground } from "~/pages/video/music/layout/view/background";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const LayoutView: FC<
  PropsWithChildren
> = ({ children }) => {
  const { y, left, width, screen } =
    useVideoStyle();

  return (
    <>
      <LayoutViewBackground />
      <div
        className="absolute column-stretch grow"
        style={{
          left:
            left -
            box.m0125 -
            box.m00625,
          gap: box.m0125,
          width: width + box.m025,
          paddingTop: y,
          height: screen.height * 2,
        }}
      >
        {children}
      </div>
    </>
  );
};

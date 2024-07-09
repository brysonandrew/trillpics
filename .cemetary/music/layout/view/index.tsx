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
            box._0125 -
            box._00625,
          gap: box._0125,
          width: width + box._025,
          paddingTop: y,
          height: screen.height * 2,
        }}
      >
        {children}
      </div>
    </>
  );
};

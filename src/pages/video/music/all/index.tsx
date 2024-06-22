import { FC } from "react";
import {
  TDivProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { MusicPlay } from "~/pages/video/music/all/play";
import { useVideoStyle } from "~/pages/video/style";

type TProps =
  TPropsWithChildren<TDivProps>;
export const MusicAll: FC<TProps> = ({
  style,
  ...props
}) => {
  const {
    y,
    left,
  } = useVideoStyle();
  const s = boxSize();
  return (
    <div
      className="fixed z-20"
      style={{
        left:left - s.m2,
        top: y+s.m4-s.m0125,
        gap: s.m2,
        ...style,
      }}
      {...props}
    >
      <MusicPlay />
    </div>
  );
};

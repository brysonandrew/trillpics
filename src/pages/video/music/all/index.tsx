import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { AllMusicLoop } from "~/pages/video/music/all/loop";
import { MusicPlay } from "~/pages/video/music/all/play";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicAll: FC<
  TProps
> = () => {
  const s = boxSize();
  return (
    <div
      className="absolute column"
      style={{
        left: -s.m15 - s.m025,
        top: s.m4-s.m05,
        gap: s.m15,
      }}
    >
      <AllMusicLoop />
      <MusicPlay />
    </div>
  );
};

import type { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";
import { MusicLayoutTitle } from "~/pages/video/music/title";
import { useHoverKey } from "~/hooks/use-hover-key";
import { useMusicReadyContext } from "~/pages/video/music/_context/ready/index";

type TProps = {
  name: string;
  index: number;
  rightContent?: JSX.Element | null;
};
export const MusicLayoutSteps: FC<
  TProps
> = ({ name, rightContent }) => {
  const s = boxSize();
  const borderRadius = boxRadius("m");
  const {  handlers } =
    useHoverKey();
  const { midis: lookup } =
    useMusicReadyContext();
  return (
    <li
      className={clsx(
        "relative column-stretch bg-black-9 dark:bg-black-4 p-1"
      )}
      style={{
        borderRadius,
        gap: s.m025,
      }}
      {...handlers(name)}
    >
      <div className="relative row-space">
        <div className="absolute _gradient-radial h-px w-full" />
        <MusicLayoutTitle
          onClick={() => {
            lookup.synth.play(
              0,
              10
            );
          }}
        >
          {name}
        </MusicLayoutTitle>
        <div className="relative">
          {rightContent}
        </div>
      </div>
    </li>
  );
};

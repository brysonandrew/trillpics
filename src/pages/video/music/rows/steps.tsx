import type { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { boxRadius } from "~uno/rules/box/radius";
import clsx from "clsx";
import { MusicRowsTitle } from "~/pages/video/music/rows/title";
import { useHoverKey } from "~/hooks/use-hover-key";
import { useSoundBeatsLookup } from "~/hooks/sound/beats/lookup";

type TProps = {
  name: string;
  index: number;
  rightContent?: JSX.Element|null;
};
export const MusicRowsSteps: FC<
  TProps
> = ({ name, index, rightContent }) => {
  const s = boxSize();
  const borderRadius = boxRadius("m");
  const { isHover, handlers } =
    useHoverKey();
  const lookup = useSoundBeatsLookup();
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
        <MusicRowsTitle
          onClick={() => {
            (lookup as any)[name](0, 10);
          }}
        >
          {name}
        </MusicRowsTitle>
        <div className="relative">
          {rightContent}
        </div>
      </div>
    </li>
  );
};

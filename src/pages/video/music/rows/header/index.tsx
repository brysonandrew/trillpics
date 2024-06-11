import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { MusicRowsTitle } from "~/pages/video/music/rows/title";

type TProps = {
  play:any
  rightContent?: JSX.Element;
};
export const MusicRowsHeader: FC<
  TPropsWithChildren<TProps>
> = ({ children, play,rightContent }) => {
  return (
    <div className="row-space px-1.5">
      <MusicRowsTitle
        onClick={() => play()}
      >
        {children}
      </MusicRowsTitle>
      {rightContent}
    </div>
  );
};

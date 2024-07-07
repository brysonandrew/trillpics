import type {
  FC,
  PropsWithChildren,
} from "react";
import { PillBText } from "~/components/buttons/pill/b/text";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { MusicLayoutHeaderTitleText } from "~/pages/video/music/layout/header/title/text";
import { box } from "~uno/rules/box";

export const MusicLayoutHeaderTitle: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
      className="row shrink-0"
      style={{
        gap: box._0125,
      }}
    >
      <LinesHorizontalLight
        style={{
          width: box._075,
        }}
      />
      <MusicLayoutHeaderTitleText>
        {children}
      </MusicLayoutHeaderTitleText>
    </div>
  );
};

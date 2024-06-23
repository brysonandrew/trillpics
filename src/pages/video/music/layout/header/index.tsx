import type { FC } from "react";
import { box } from "~uno/rules/box";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";
import { useTrillPicsStore } from "~/store/middleware";
import { IconsLoop } from "~/components/icons/loop";
import { Pill } from "~/components/layout/pill";
import { MusicLayoutHeaderTitle } from "~/pages/video/music/layout/header/title";

type TProps = Partial<TPillBProps> & Pick<TPillBProps, "Icon"> & {
  rightContent?: JSX.Element;
  leftContent?: JSX.Element;
};
export const MusicLayoutHeader: FC<
  TProps
> = ({
  children,
  rightContent,
  leftContent,
  style,
  Icon,
  ...props
}) => {
  const { isLoop } = useTrillPicsStore(
    ({ isLoop }) => ({
      isLoop,
    })
  );

  return (
    <div
      className="row relative w-full"
      style={{
        paddingLeft: box.m0125,
        paddingRight: box.m025,
        gap: box.m0125,
      }}
    >
      <PillB
        Icon={Icon}
        title={`play ${children}`}
        style={{
          gap: box.m0125,
          padding: box.m025,
          paddingRight: 0,
          width: box.m6,
          ...style,
        }}
        {...props}
      >
        <MusicLayoutHeaderTitle>
          {children}
        </MusicLayoutHeaderTitle>
        <div className="row w-full">
          <LinesHorizontalLight />
          {isLoop && (
            <>
              <Pill>
                <IconsLoop />
              </Pill>
              <LinesHorizontalLight />
            </>
          )}
        </div>
      </PillB>
      <div className="row-space grow">
        {leftContent}
      </div>
      {rightContent}
    </div>
  );
};

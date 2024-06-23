import type { FC, PropsWithChildren } from "react";
import { TypographyXs } from "~/components/layout/typography/xs";
import { NodesDelaySliders } from "~/pages/video/music/synth/nodes/delay/sliders";
import { box } from "~uno/rules/box";

type TProps = {
  title: string;
};
export const NodesTemplate: FC<PropsWithChildren<TProps>> = ({
  children,
  title,
}) => {
  return (
    <div>
      <div
        className="column-stretch"
        style={{ gap: box.m01875 }}
      >
        <TypographyXs>
          {title}
        </TypographyXs>
        {children}
      </div>
    </div>
  );
};

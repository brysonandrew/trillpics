import type { FC } from "react";
import { TPropsWithChildren } from "@brysonandrew/config-types";
import { boxSize } from "~uno/rules/box/size";
import { LinesHorizontal } from "~/components/lines/horizontal";
import {
  PillB,
  TPillBProps,
} from "~/components/buttons/pill/b";
import { PillBText } from "~/components/buttons/pill/b/text";
import { TIconsSvgProps } from "@brysonandrew/svg-icon";

type TProps = Partial<TPillBProps> & {
  rightContent?: JSX.Element;
  leftContent?: JSX.Element;
  Icon: FC<TIconsSvgProps>;
};
export const MusicLayoutHeader: FC<
  TPropsWithChildren<TProps>
> = ({
  children,
  rightContent,
  leftContent,
  style,
  Icon,
  ...props
}) => {
  const s = boxSize();
  return (
    <div
      className="row relative w-full"
      style={{
        paddingLeft: s.m025,
        paddingRight: s.m05,
        gap: s.m0125,
      }}
    >
      <PillB
        Icon={Icon}
        title={`play ${children}`}
        style={{
          gap: s.m0125,
          padding: s.m025,
          ...style,
        }}
        {...props}
      >
        <div
          className="row"
          style={{
            gap: s.m0125,
          }}
        >
          <LinesHorizontal
            style={{
              width: s.m075,
            }}
          />
          <PillBText
            textSizeClass="text-xl"
            style={{ top: s.m0125 / 2 }}
          >
            {children}
          </PillBText>
        </div>
      </PillB>
      <div className="row-space grow">
        {leftContent}
      </div>
      {rightContent}
    </div>
  );
};

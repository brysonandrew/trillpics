import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographySm } from "~/components/layout/typography/sm";
import { TypographyXs } from "~/components/layout/typography/xs";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { box } from "~uno/rules/box";

type TProps = {
  title: string;
  Input: FC;
};
export const NodesTemplate: FC<
  PropsWithChildren<TProps>
> = ({ children, title, Input }) => {
  return (
    <div
      className="relative column-stretch"
      style={{
        gap: box.m0125,
        ...box.p(box.m0125),
      }}
    >
      <div className="fill bg-black pointer-events-none" />
      <div className="fill _box-dots opacity-20 pointer-events-none" />
      <div className="row-space">
        <TypographyXxs>
          {title}
        </TypographyXxs>
        <Input />
      </div>
      {children}
    </div>
  );
};

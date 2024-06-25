import type {
  FC,
  PropsWithChildren,
} from "react";
import { TypographySm } from "~/components/layout/typography/sm";
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
        gap: box.m025,
        ...box.p(box.m025),
      }}
    >
      <div className="fill bg-black pointer-events-none" />
      <div className="fill _box-dots opacity-20 pointer-events-none" />
      <div className="row-space">
        <TypographySm>
          {title}
        </TypographySm>
        <Input />
      </div>
      {children}
    </div>
  );
};

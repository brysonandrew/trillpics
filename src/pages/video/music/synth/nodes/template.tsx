import type {
  FC,
  PropsWithChildren,
} from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { box } from "~uno/rules/box";

type TProps = TDivProps & {
  title: string;
  Input: FC;
};
export const NodesTemplate: FC<
  PropsWithChildren<TProps>
> = ({
  children,
  title,
  Input,
  style,
  ...props
}) => {
  return (
    <div
      className="relative column-stretch"
      style={{
        gap: box.m025,
        ...box.p(box.m0125),
        ...style,
      }}
      {...props}
    >
      <div className="fill bg-black pointer-events-none" />
      <div className="fill _box-dots opacity-20 pointer-events-none" />
      <div
        className="row-space"
        style={{ height: box.m07 }}
      >
        <TypographyXxs>
          {title}
        </TypographyXxs>
        <Input />
      </div>
      {children}
    </div>
  );
};

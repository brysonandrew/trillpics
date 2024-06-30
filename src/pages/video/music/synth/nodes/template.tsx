import type {
  FC,
  PropsWithChildren,
} from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TypographyXxs } from "~/components/layout/typography/xxs";
import { box } from "~uno/rules/box";
import { isString } from "~/utils/validation/is/string";

export type TNodesTemplateProps = Omit<
  TDivProps,
  "title"
> & {
  title: string | JSX.Element;
  Input: FC;
};
export const NodesTemplate: FC<
  PropsWithChildren<TNodesTemplateProps>
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
        paddingLeft:box.m025,
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
        {isString(title) ? (
          <TypographyXxs>
            {title}
          </TypographyXxs>
        ) : (
          <>{title}</>
        )}

        <Input />
      </div>
      {children}
    </div>
  );
};

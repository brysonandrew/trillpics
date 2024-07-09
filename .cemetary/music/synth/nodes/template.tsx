import type {
  FC,
  PropsWithChildren,
} from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";

export type TNodesTemplateProps = Omit<
  TDivProps,
  "title"
> & {
  title?: string | JSX.Element;
  Input?: FC;
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
      className="relative row"
      style={{
        gap: box._0125,
        ...box.p(box._0125),
        ...style,
      }}
      {...props}
    >
      <div className="fill bg-black pointer-events-none" />
      <div className="fill _bi-dots opacity-40 pointer-events-none" />
      {Input && <Input />}
      {children}
    </div>
  );
};

import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import clsx from "clsx";

type TProps = TDivProps;
export const InputsBox: FC<TProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "relative column-start"
        // "border border-white-02"
      )}
      style={{
        borderRadius: box.radius.m,
        ...box.py(box.m00625),
        ...box.px(box.m0125),
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

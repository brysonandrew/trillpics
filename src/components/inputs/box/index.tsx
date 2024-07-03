import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import clsx from "clsx";
import { INPUTS_NUMBER_BOX_STYLE } from "~/components/inputs/constants";

type TProps = TDivProps;
export const InputsBox: FC<TProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <div
      className={clsx(
        "relative column-stretch justify-stretch"
      )}
      style={{
        ...INPUTS_NUMBER_BOX_STYLE,
        ...style,
        gap: box.m00625
      }}
      {...props}
    >
      {children}
    </div>
  );
};

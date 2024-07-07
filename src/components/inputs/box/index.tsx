import type { FC } from "react";
import { TLabelProps } from "@brysonandrew/config-types";
import { box } from "~uno/rules/box";
import clsx from "clsx";
import { INPUTS_NUMBER_BOX_STYLE } from "~/components/inputs/constants";

type TProps = TLabelProps;
export const InputsBox: FC<TProps> = ({
  style,
  children,
  ...props
}) => {
  return (
    <label
      className={clsx(
        "relative column-stretch justify-stretch"
      )}
      style={{
        ...INPUTS_NUMBER_BOX_STYLE,
        ...style,
        gap: box._00625,
        top: box._00625,
      }}
      {...props}
    >
      {children}
    </label>
  );
};

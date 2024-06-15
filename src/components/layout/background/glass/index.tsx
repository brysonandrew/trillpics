import type {
  CSSProperties,
  FC,
} from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxSize } from "~uno/rules/box/size";
export const BackgroundGlass: FC<
  TDivProps & {
    boxStyle?: CSSProperties;
  }
> = ({
  classValue,
  style,
  boxStyle,
  ...props
}) => {
  const s = boxSize();
  const commonProps = {
    style: { ...style },
    ...props,
  };
  return (
    <div
      className={clsx(
        "fill pointer-events-none",
        classValue
      )}
      style={{
        inset:0,
        ...boxStyle,
        ...style,
      }}
      {...props}
    >
      <div
        className={clsx(
          "fill",
          "border border-white-02 dark:border-black-02",
          classValue
        )}
        {...commonProps}
      />
      <div
        className={clsx(
          "fill",
          "bg-white-1 dark:bg-gray opacity-10 dark:opacity-20",
          classValue
        )}
        {...commonProps}
      />
    </div>
  );
};

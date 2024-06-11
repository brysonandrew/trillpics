import type {
  CSSProperties,
  FC,
} from "react";
import { TDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxSize } from "~uno/rules/box/size";
import { useVideoPlayerStyle } from "~/pages/video/player/style";

export const MusicBackground: FC<
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
  const {
    playerStyle,
    y,
    gap,
    left,
    width,
  } = useVideoPlayerStyle();
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
        inset: -s.m0125,
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
          "bg-white-1 dark:bg-black opacity-10",
          classValue
        )}
        {...commonProps}
      />
    </div>
  );
};

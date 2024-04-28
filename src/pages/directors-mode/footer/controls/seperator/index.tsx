import type { FC } from "react";
import { TBoxSize } from "~/constants/box/style/size";
import { boxStyle } from "~/constants/box/style";
import clsx from "clsx";

type TProps = {
  sizeKey: NonNullable<keyof TBoxSize>;
};
export const Seperator: FC<TProps> = ({
  sizeKey,
}) => {
  const {
    borderRadius,
    boxShadow,
    backgroundColor,
    backgroundImage,
    ...sizeStyle
  } = boxStyle({
    layer: "floating",
    borderRadius: "borderRadius",
    backgroundImage: "_weave-gradient",
    backgroundColor: "background-flat",
    size: "md",
  });
  return (
    <div
      className={clsx(
        "center background-flat"
      )}
      style={{
        borderRadius,
        [sizeKey]: sizeStyle[sizeKey],
      }}
    >
      <div
        className={clsx(
          "w-4 h-4 opacity-20 _weave-gradient"
        )}
        style={{
          borderRadius,
        }}
      />
    </div>
  );
};

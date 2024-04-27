import type { FC } from "react";
import { useBorderStyle } from "~/store/hooks/core/use-border-style";

export const Seperator: FC = () => {
  const {
    borderRadius,
    boxShadow,
    ...sizeStyle
  } = useBorderStyle({
    layer: "floating",
    borderRadius: "borderRadius",
    size: "size",
  });
  return (
    <div
      className="center"
      style={{
        borderRadius,
        ...sizeStyle,
      }}
    >
      <div
        className="w-4 h-4 rounded-full _net-gradient"
        style={{
          borderRadius,
        }}
      />
    </div>
  );
};

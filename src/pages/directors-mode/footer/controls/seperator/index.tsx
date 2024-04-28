import type { FC } from "react";
import { TUseBoxSize } from "~/store/hooks/core/box/use-box-size";
import { useBoxStyle } from "~/store/hooks/core/box/use-box-style";

type TProps = {
  sizeKey: NonNullable<keyof TUseBoxSize>;
};
export const Seperator: FC<TProps> = ({
  sizeKey,
}) => {
  const {
    borderRadius, 
    boxShadow,
    ...sizeStyle
  } = useBoxStyle({
    layer: "floating",
    borderRadius: "borderRadius",
    size: "md",
  });
  return (
    <div
      className="center"
      style={{
        borderRadius,
        mixBlendMode: "difference",
        [sizeKey]: sizeStyle[sizeKey],
      }}
    >
      <div
        className="w-4 h-4 rounded-full bg-gray _net-gradient opacity-50"
        style={{
          borderRadius,
        }}
      />
    </div>
  );
};

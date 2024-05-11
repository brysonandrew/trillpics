import type { FC } from "react";
import { TPathProps } from "@brysonandrew/config-types";
type TProps = TPathProps & {
  size: number;
  corner: {
    size: number;
    thickness: number;
  };
  stroke: string;
  inset: number;
};
export const CursorCornersSet: FC<TProps> = ({
  size,
  corner,
  stroke,
  inset,
  ...props
}) => {
  inset = inset;
  return (
    <>
      <path
        d={`M${corner.size},${inset} L${inset},${inset} L${inset},${corner.size}`}
        stroke={stroke}
        strokeWidth={corner.thickness}
        {...props}
      />
      <path
        d={`M${inset},${
          size - corner.size
        } L${inset},${size - inset} L${
          corner.size
        },${size - inset}`}
        stroke={stroke}
        strokeWidth={corner.thickness}
        {...props}
      />
      <path
        d={`M${size - corner.size},${
          size - inset
        } L${size - inset},${
          size - inset
        } L${size - inset},${
          size - corner.size
        }`}
        stroke={stroke}
        strokeWidth={corner.thickness}
        {...props}
      />
      <path
        d={`M${size - inset},${
          corner.size
        } L${size - inset},${inset} L${
          size - corner.size
        },${inset}`}
        stroke={stroke}
        strokeWidth={corner.thickness}
        {...props}
      />
    </>
  );
};

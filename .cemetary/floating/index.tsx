import type {
  FC,
  PropsWithChildren,
} from "react";
import { boxSize } from "~uno/box/border/size";

export const PicsFloating: FC<
  PropsWithChildren
> = ({ children }) => {
  const { size } = boxSize("s");
  return (
    <div className="absolute left-1/2 top-0 container -translate-x-1/2 h-0 bg-white">
      <div className="absolute left-0 top-4 w-full h-0 row-start justify-center bg-white">
        <div
          className="absolute left-0 w-full center h-1 gap-4"
          style={{ top: size / 2 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

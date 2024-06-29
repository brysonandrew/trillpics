import type {
  FC,
  PropsWithChildren,
} from "react";
import { box } from "~uno/rules/box";

export const InputsNumberBox: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div className="relative row" style={{ gap: box.m0125 }}>
      {children}
    </div>
  );
};

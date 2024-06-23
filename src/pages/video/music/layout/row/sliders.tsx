import type {
  FC,
  PropsWithChildren,
} from "react";
import { box } from "~uno/rules/box";

export const MusicLayoutRow: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
      className="relative column-stretch"
      style={{
        gap: box.m025,
        ...box.py(box.m05),
        paddingRight: box.m0125,
        ...box.r.xl,
      }}
    >
      {children}
    </div>
  );
};

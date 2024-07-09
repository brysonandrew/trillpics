import type {
  FC,
  PropsWithChildren,
} from "react";
import { DarkGlass } from "~/pages/video/music/layout/glass/dark";
import { box } from "~uno/rules/box";

export const MusicLayoutRow: FC<
  PropsWithChildren
> = ({ children }) => {
  return (
    <div
      className="relative column-stretch bg-black-8 dark:bg-black"
      style={{
        gap: box._0375,
        ...box.py(box._00625),
        paddingRight: box._0125,
        ...box.r.xl,
      }}
    >
      <DarkGlass />
      {children}
    </div>
  );
};

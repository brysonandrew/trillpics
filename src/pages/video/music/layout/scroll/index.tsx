import type {
  FC,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { useMusicRefs } from "~/pages/video/music/_context/init";

export const LayoutScroll: FC<
  PropsWithChildren
> = ({ children }) => {
  const { layout } = useMusicRefs();

  return (
    <div
      className={clsx(
        "fill overflow-auto h-screen w-full",
        "flex flex-row items-stretch justify-stretch"
      )}
      ref={layout.scroll}
    >
      {children}
    </div>
  );
};

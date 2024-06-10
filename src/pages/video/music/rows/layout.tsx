import type { FC } from "react";
import { boxRadius } from "~uno/rules/box/radius";
import { TButtonProps } from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = Partial<
  TButtonProps & { isActive: boolean }
>;
export const MusicRowsLayout: FC<
  TProps
> = ({ children, isActive }) => {
  const borderRadius = boxRadius("m");

  return (
    <div className="relative px-2 pt-1" style={{borderRadius}}>
      <div
        className="absolute -inset-0.125 _gradient-radial"
        style={{
          borderRadius,
        }}
      />
      <div
        className="fill dark:bg-black-2 bg-black-6"
        style={{
          borderRadius,
        }}
      />
      <div
        className={clsx(
          "relative row gap-2 px-1 -mt-0.5",
          "uppercase font-sans text-xs lg:text-sm",
          isActive
            ? "text-current"
            : "text-gray"
        )}
      >
        {children}
      </div>
    </div>
  );
};

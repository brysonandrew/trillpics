import type { FC } from "react";
import { boxRadius } from "~uno/rules/box/radius";
import { TButtonProps } from "@brysonandrew/config-types";
import clsx from "clsx";

type TProps = Partial<
  TButtonProps & { isActive: boolean }
>;
export const SoundSequencerButton: FC<
  TProps
> = ({
  children,
  isActive,
  classValue,
  ...props
}) => {
  const borderRadius = boxRadius("m");

  return (
    <button
      title="check all"
      style={{
        borderRadius,
      }}
      className={clsx(
        "relative uppercase text-sm px-2 pt-1",
        classValue,
        isActive
          ? "text-current"
          : "text-gray"
      )}
      {...props}
    >
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
      <div className="relative row gap-2">
        {children}
      </div>
    </button>
  );
};

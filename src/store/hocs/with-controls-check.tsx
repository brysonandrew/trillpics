import { FC } from "react";
import { useControlsCheck } from "~/store/hooks/use-controls-check";

export function withControlsCheck<
  T extends object
>(I: FC<T>) {
  const C = (props: T) => {
    const isControls =
      useControlsCheck();
    if (!isControls) return null;
    return <I {...props} />;
  };
  return C;
}

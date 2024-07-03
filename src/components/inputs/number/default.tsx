import type { FC } from "react";
import { TInputsNumberChildrenProps } from "~/components/inputs/number";

export const InputsNumberDefault: FC<
  TInputsNumberChildrenProps
> = (_) => {
  return (
    <_.Box>
      <div className="relative">
        <_.Title />
        <_.Number />
      </div>
      <_.Slider />
    </_.Box>
  );
};

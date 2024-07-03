import type { FC } from "react";
import { TInputsNumberChildrenProps } from "~/components/inputs/number";

export const InputsNumberSm: FC<
  TInputsNumberChildrenProps
> = (_) => {
  return (
    <_.Box>
      <div className="relative">
        <_.Title />
        <_.Number s="sm" />
      </div>
      <_.Slider s="sm" />
    </_.Box>
  );
};

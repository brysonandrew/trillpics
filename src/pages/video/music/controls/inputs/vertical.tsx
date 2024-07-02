import type { FC } from "react";
import { TInputsNumberChildrenProps } from "~/components/inputs/number";
import { box } from "~uno/rules/box";

export const Vertical: FC<
  TInputsNumberChildrenProps
> = (_) => {
  return (
    <_.Box
      // classValue="relative column-stretch w-full"
      // style={{
      //   height: box.m2,
      //   ...box.py(box.m0125),
      //   ...box.r.s,
      // }}
    >
      <div className="relative">
        <_.Title />
        <_.Number />
      </div>
      <_.Slider />
    </_.Box>
  );
};

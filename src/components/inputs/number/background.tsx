import type { FC } from "react";
import { box } from "~uno/rules/box";

export const InputsNumberBackground: FC =
  () => {
    return (
      <div
        className="fill _bi-mesh pointer-events-none opacity-90"
        style={{
          ...box.r.l,
          ...box.iy(0),
          ...box.ix(-box._00625),
        }}
      />
    );
  };

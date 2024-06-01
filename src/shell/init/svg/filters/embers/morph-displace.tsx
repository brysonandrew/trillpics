import type { FC } from "react";

export const morphDisplaceSource = (
  key: string,
  mScale = 1,
  dScale = 2
) => {
  return (
    <>
      <feMorphology
        in="SourceGraphic"
        operator="dilate"
        radius={mScale}
        result="morphDisplaceSource0"
      />
      <feDisplacementMap
        in2="SourceGraphic"
        in="morphDisplaceSource0"
        scale={dScale}
        // xChannelSelector="B"
        // yChannelSelector="B"
        result="morphDisplaceSource1"
      />
      <feOffset
        in="morphDisplaceSource1"
        dx={-dScale / 2}
        dy={-dScale / 2}
        result={key}
      />
    </>
  );
};

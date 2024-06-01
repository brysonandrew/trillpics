import type { FC } from "react";
import { SvgWrap } from "@brysonandrew/svg-dimensionless";
import { resolveFilterAttr } from "@brysonandrew/utils-attributes";
export const DUO_TONE_ID =
  "DUO_TONE_ID";
export const DUO_TONE_PROPS =
  resolveFilterAttr(DUO_TONE_ID);
export const DuoTone: FC = () => {
  return (
    <SvgWrap>
      <filter id={DUO_TONE_ID}>
        <feComponentTransfer color-interpolation-filters="sRGB">
          <feFuncR
            type="gamma"
            exponent="1.5"
            amplitude="1.3"
            offset="0"
          ></feFuncR>
          <feFuncG
            type="gamma"
            exponent="1.5"
            amplitude="1.3"
            offset="0"
          ></feFuncG>
          <feFuncB
            type="gamma"
            exponent="1.5"
            amplitude="1.3"
            offset="0"
          ></feFuncB>
        </feComponentTransfer>
      </filter>
    </SvgWrap>
  );
};

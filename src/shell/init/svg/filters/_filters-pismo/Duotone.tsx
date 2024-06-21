import { resolveFilterAttr } from "@brysonandrew/utils-attributes";

export const DUOTONE_ID_2 = "DUOTONE_ID_2";
const random = Math.random() * 2;
export const DUOTONE_PROPS_2 =
  resolveFilterAttr(DUOTONE_ID_2);
  
export const Duotone2 = () => (
  <filter id={DUOTONE_ID_2}>
    <feColorMatrix
      in="SourceImage"
      type="matrix"
      result="grayscale"
      values="1 0 0 0 0
          1 0 0 0 0
          1 0 0 0 0
          0 0 0 1 0"
    />
    <feComponentTransfer
      colorInterpolationFilters="sRGB"
      result="duotone"
    >
      <feFuncR
        type="table"
        tableValues="0.05490196078 1"
      />
      {random ? (
        <>
          <feFuncR
            type="table"
            tableValues="0.7411764706 0.9882352941"
          />
          <feFuncG
            type="table"
            tableValues="0.0431372549 0.7333333333"
          />
          <feFuncB
            type="table"
            tableValues="0.568627451 0.05098039216"
          />
          <feFuncA
            type="table"
            tableValues="0 1"
          />
        </>
      ) : (
        <>
          <feFuncR
            type="table"
            tableValues="0.05490196078 1"
          />
          <feFuncG
            type="table"
            tableValues="0.1568627451 0.5921568627"
          />
          <feFuncB
            type="table"
            tableValues="0.1647058824 0.003921568627"
          />
          <feFuncA
            type="table"
            tableValues="0 1"
          />
        </>
      )}
    </feComponentTransfer>
  </filter>
);

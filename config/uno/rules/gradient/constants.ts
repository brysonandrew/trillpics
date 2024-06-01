import { resolveGradient } from "@brysonandrew/color-gradient";
import {
  boxBorderCss,
  resolveBoxBackground,
} from "@brysonandrew/utils-box";
import {
  DARK_LOGO,
  LIGHT_LOGO,
  TValues,
} from "../../color/config/constants";

export const LINEAR_GRADIENT_SVG_ID =
  "linear-gradient-blue-pink-yellow-svg";
  
export const GRADIENT_BLUE_PINK_YELLOW_COLORS =
  [
    ...(Object.values(
      DARK_LOGO
    ) as TValues<typeof DARK_LOGO>),
  ] as const;

export const GRADIENT_TEAL_YELLOW_PINK_COLORS =
  [
    ...(Object.values(
      LIGHT_LOGO
    ) as TValues<typeof LIGHT_LOGO>),
  ] as const;

export const GRADIENT_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
    ],
  });

export const GRADIENT_TEAL_YELLOW_PINK =
  resolveGradient({
    name: "linear-gradient",
    parts: [
      "to left top",
      ...GRADIENT_TEAL_YELLOW_PINK_COLORS,
    ],
  });

export const RADIAL_BLUE_PINK_YELLOW =
  resolveGradient({
    name: "radial-gradient",
    parts: [
      "circle at 100%",
      ...GRADIENT_BLUE_PINK_YELLOW_COLORS,
    ],
  });

export const RADIAL_TEAL_YELLOW_PINK =
  resolveGradient({
    name: "radial-gradient",
    parts: [
      "circle at 100%",
      ...GRADIENT_TEAL_YELLOW_PINK_COLORS,
    ],
  });

export const GRADIENT_BORDER_COMMON = {
  ...boxBorderCss({
    width: "2px",
    style: "solid",
    imageSlice: 1,
  }),
};

export const GRADIENT_TEXT_COMMON = {
  ...resolveBoxBackground({
    size: "100% 100%",
  }),
  "-webkit-background-clip": "text",
  "-webkit-text-stroke":
    "2px transparent",
};

export const GRADIENT_ZEBRA = {
  ...resolveBoxBackground({
    image: resolveGradient({
      name: "repeating-linear-gradient",
      parts: [
        "to top left",
        "black",
        "black 40px",
        "white 40px",
        "white 80px",
      ],
    }),
  }),
};

const FADE_100_05 =
  "hsla(0, 0%, 100%, 0.5)";
const TRANSPARENT =
  "hsla(0, 0%, 0%, 0)";

const POSITIONS = [
  ["50% 0%", "8% 50%"],
  ["50% 100%", "12% 50%"],
  ["0% 50%", "50% 7%"],
  ["100% 50%", "50% 5%"],
] as const;

export const GRADIENT_DIAMOND_METAL_RADIAL =
  {
    ...resolveBoxBackground({
      image: POSITIONS.map((position) =>
        resolveGradient({
          name: "radial-gradient",
          parts: [
            ...position,
            `${FADE_100_05} 0%`,
            `${TRANSPARENT} 100%`,
          ],
        })
      ).join(", "),
    }),
  };

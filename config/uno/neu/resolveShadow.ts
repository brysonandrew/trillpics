import { TShadowConfig, TShadowReturn } from "./types";

export const resolveShadow = ({
  size,
  color,
  blur,
}: TShadowConfig): TShadowReturn => ({
  fill: `${size}px ${size}px ${
    size * blur
  }px ${color.fill}`,
  back: `${-size}px ${-size}px ${
    size * blur
  }px ${color.back}`,
  emptyFill: `${size}px ${size}px ${0}px ${
    color.fill
  }`,
  emptyBack: `${-size}px ${-size}px ${0}px ${
    color.back
  }`,
});
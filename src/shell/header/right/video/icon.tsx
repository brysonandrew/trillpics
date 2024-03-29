import { resolveUrlId } from "@brysonandrew/utils-attributes";
import { LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID } from "@components/gradients/linear-gradient-blue-pink-yellow-svg";
import { useVideoStore } from "@store/index";
import type { FC } from "react";

export const VideoIcon: FC = () => {
  const {
    isVideoMode,
  } = useVideoStore();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36px"
      height="36px"
      viewBox="0 0 24 24"
    >
      <path
        fill={isVideoMode ? "currentColor":resolveUrlId(
          LINEAR_GRADIENT_BLUE_PINK_YELLOW_SVG_ID
        )}
        d="M2 5h14v4h2V7h2V5h2v14h-2v-2h-2v-2h-2v4H2zm2 12h10V7H4z"
      />
    </svg>
  );
};

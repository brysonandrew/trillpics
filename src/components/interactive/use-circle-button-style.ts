import { useApp } from "@brysonandrew/app";

export const useCircleButtonStyle =
  () => {
    const { BORDER_RADIUS } = useApp();
    return {
      borderRadius: BORDER_RADIUS.XL,
      width: "2.75rem",
      height: "2.75rem",
    };
  };

import { useApp } from "@brysonandrew/app";

export const useCircleButtonStyle =
  () => {
    const { BORDER_RADIUS } = useApp();
    return {
      borderRadius: BORDER_RADIUS.XL,
      width: "3rem",
      height: "3rem",
    };
  };

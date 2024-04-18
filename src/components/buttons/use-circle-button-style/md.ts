import { useApp } from "@brysonandrew/app";

export const useCircleButtonStyleMd =
  () => {
    const { BORDER_RADIUS } = useApp();
    return {
      borderRadius: BORDER_RADIUS.XL,
      width: "2.5rem",
      height: "2.5rem",
    };
  };

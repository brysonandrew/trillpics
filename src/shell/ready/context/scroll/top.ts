import { useContextReady } from "~/shell/ready/context";
import { useBlurAnimate1 } from "~/hooks/animate/blur/animate/1";

export const useScrollTopHandler =
  () => {
    const { scrollY, ref } =
      useContextReady();
    const handleBlur =
      useBlurAnimate1("y");
    const handler = () => {
      if (!ref.current) return;
      ref.current.scrollTop();
      handleBlur(scrollY);
    };

    return handler;
  };

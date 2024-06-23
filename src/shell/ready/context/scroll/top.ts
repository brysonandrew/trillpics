import { useContextReady } from "~/shell/ready/context";
import { useBlurAnimate } from "~/hooks/animate/blur/animate";

export const useScrollTopHandler =
  () => {
    const {  ref } =
      useContextReady();
    // const handleBlur = useBlurAnimate(
    //   "scrollY",
    //   20
    // );
    const handler = () => {
      if (!ref.current) return;
      // handleBlur();
      ref.current.scrollTop();
    };

    return handler;
  };

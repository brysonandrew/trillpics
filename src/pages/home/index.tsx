import { motion } from "framer-motion";
import { Header } from "~/pages/home/header";
import { Controls } from "~/pages/home/controls";
import { useVideoStore } from "~/store";
import { useShallow } from "zustand/react/shallow";
import { useIdleStatus } from "~/hooks/use-idle";
import { SEARCH_PARAM_ID } from "~/pages/home/pics/pic/use-pic";
import { useSearchParams } from "react-router-dom";
import {
  MOTION_BLUR_FILTER_X_PROPS,
  MOTION_BLUR_FILTER_Y_PROPS,
} from "~/pages/home/blur/constants";
import { BlurX } from "~/pages/home/blur/filter/x";
import { BlurY } from "~/pages/home/blur/filter/y";
import { BlurXy } from "~/pages/home/blur/xy";
import { List } from "./pics";

const Home = () => {
  const [searchParams] =
    useSearchParams();
  const searchParam = searchParams.get(
    SEARCH_PARAM_ID
  );
  const isImageZoomed = Boolean(
    searchParam
  );
  useIdleStatus();
  const { isControls } = useVideoStore(
    useShallow(({ isControls }) => ({
      isControls,
    }))
  );

  // useMotionValueEvent(
  //   scrollY,
  //   "velocityChange",
  //   (velocity) => {
  //     // if (spin.isAnimating()) {
  //     //   animateRef.current?.stop();
  //     // }

  //     if (velocity === 0) {
  //       console.log("VELOCITY 0")
  //       // const spinValue = spin.get();
  //       const spinDelta =
  //         scrollY.getPrevious();

  //       animate(scrollY, 0, {
  //         type: "inertia",
  //         restDelta: 0,
  //         velocity: spinDelta * 10,
  //       });
  //     } else {
  //       const prev = scrollY.get();
  //       const next =
  //         prev + velocity * 0.00002;
  //       scrollY.set(next, false);
  //     }
  //   }
  // );

  return (
    <>
      <BlurXy>
        <List />
      </BlurXy>
      <>
        {isControls &&
          !isImageZoomed && (
            <>
              <Header key="header" />
              <Controls key="controls" />
            </>
          )}
      </>
    </>
  );
};
export { Home };

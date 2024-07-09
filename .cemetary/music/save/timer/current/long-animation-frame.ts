import { useEffect } from "react";

type TConfig = any;
export const useLongAnimationFrame = (
  config: TConfig
) => {
  useEffect(() => {
    // const observer = new PerformanceObserver((list) => {
    //   console.log(list.getEntries());
    // });
    // observer.observe({ type: "long-animation-frame", buffered: true });
    // value.set(target);
    // return () => {
    //   text = {
    //     isStarted: false,
    //     start: 0,
    //     m: [null, null],
    //     s: [null, null],
    //     ms: [null, null],
    //   };
    // };
  }, []);
};

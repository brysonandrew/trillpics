import {
  FC,
  PropsWithChildren,
  useRef,
} from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { LayoutViewBackgroundProgress } from "~/pages/video/music/layout/view/background/progress";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useVideoStyle } from "~/pages/video/style";
import { useContextReady } from "~/shell/ready/context";
import { box } from "~uno/rules/box";

export const LayoutViewBackground: FC<
  PropsWithChildren
> = () => {
  const ref =
    useRef<HTMLDivElement | null>(null);
  const { scroll } =
    useContextMusicInit();
  const { screen } = useContextReady();
  const {
    y,
    left,
    screenHeight,
    containerHeight,
  } = useVideoStyle();
  const height = screenHeight - y / 2;
  console.log(screenHeight)
  useEventListener(
    "scroll",
    (e) => {
      if (
        ref.current === null ||
        scroll.current === null
      )
        return;
      const diffY = (containerHeight-y) - (height);
      const scrollTop =
        scroll.current.scrollTop;
      const isStartScrollY =
        scrollTop < diffY;
      if (!isStartScrollY) return;
      const nextHeight =
        height +
        (diffY-scrollTop)
console.log(nextHeight)
      ref.current.style.height = `${nextHeight}px`;
    },
    scroll
  );
  return (
    <div
      ref={ref}
      className="fixed"
      style={{
        ...box.ix(left - box.m0125),
        top: y,
        borderRadius: box.radius.xl,
        width:
          screen.container.width -
          box.m2 -
          box.m025 -
          box.m0125,
        height,
      }}
    >
      <LayoutViewBackgroundProgress />
      <div
        className="fill _gradient-mesh bg-black-05"
        style={{
          borderRadius: box.radius.xl,
        }}
      />
    </div>
  );
};

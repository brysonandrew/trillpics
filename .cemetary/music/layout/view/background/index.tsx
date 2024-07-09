import {
  FC,
  PropsWithChildren,
  useEffect,
  useRef,
} from "react";
import { useEventListener } from "@brysonandrew/hooks-events";
import { LayoutViewBackgroundProgress } from "~/pages/video/music/layout/view/background/progress";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useVideoStyle } from "~/pages/video/style";
import { useContextReady } from "~/shell/ready/context";
import { box } from "~uno/rules/box";

export const LayoutViewBackground: FC<
  PropsWithChildren
> = () => {
  const ref =
    useRef<HTMLDivElement | null>(null);
  const { layout:{ scroll } } =
    useMusicRefs();
  const { screen } = useContextReady();
  const {
    y,
    left,
    screenHeight,
    // containerHeight,
  } = useVideoStyle();
  const height = screenHeight - y / 2;

  // const handleScroll = () => {
  //   if (
  //     ref.current === null ||
  //     scroll.current === null
  //   )
  //     return;
  //   const diffY =
  //     containerHeight - y - height;
  //   const scrollTop =
  //     scroll.current.scrollTop;
  //   const isStartScrollY =
  //     scrollTop < diffY;
  //   if (!isStartScrollY) return;
  //   const nextHeight =
  //     height + (diffY - scrollTop);
  //   ref.current.style.height = `${nextHeight}px`;
  // };

  // useEffect(() => {
  //   handleScroll();
  // }, []);

  // useEventListener(
  //   "scroll",
  //   handleScroll,
  //   scroll,{passive:true}
  // );

  return (
    <div
      ref={ref}
      className="fixed"
      style={{
        ...box.ix(left - box._0125),
        top: y,
        borderRadius: box.radius.xl,
        width:
          screen.container.width -
          box._2 -
          box._025 -
          box._0125,
        height,
      }}
    >
      <LayoutViewBackgroundProgress />
      <div
        className="fill _bi-mesh bg-black-05"
        style={{
          borderRadius: box.radius.xl,
        }}
      />
    </div>
  );
};

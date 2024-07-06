import { useEffect } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const useLayoutScrollInit =
  () => {
    const { layout:{ scroll } } =
      useMusicRefs();
    const { beatsTop } =
      useVideoStyle();
    useEffect(() => {
      console.log(scroll);
      if (scroll.current) {
        scroll.current.scrollTop =
          beatsTop - box.m05;
      }
    }, []);
  };

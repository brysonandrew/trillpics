import { useEffect } from "react";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const useLayoutScrollInit =
  () => {
    const { scroll } =
      useContextMusicInit();
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

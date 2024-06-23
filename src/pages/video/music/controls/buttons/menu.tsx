import { FC, useRef } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { IconsMenu } from "~/components/icons/menu";
import { useContextMusicInit } from "~/pages/video/music/_context/init";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const MusicControlsButtonsMenu: FC =
  () => {
    const { scroll } =
      useContextMusicInit();
    const indexRef = useRef(0);
    const { beatsTop, y, left } =
      useVideoStyle();

    const handleClick = () => {
      if (!scroll.current) return;
      const scrollTopOptions = [
        0,
        beatsTop - box.m05,
        scroll.current.scrollHeight,
      ];
      let nextScrollTop =
        scrollTopOptions[
          indexRef.current %
            scrollTopOptions.length
        ];
      if (
        nextScrollTop ===
        scroll.current.scrollTop
      ) {
        indexRef.current++;
        nextScrollTop =
          scrollTopOptions[
            indexRef.current %
              scrollTopOptions.length
          ];
      }
      scroll.current.scrollTop =
        nextScrollTop;
      indexRef.current++;
    };
    return (
      <PillB
        classValue="z-0"
        style={{
          position: "fixed",
          top: y + box.m025,
          right: left,
        }}
        title="open menu"
        Icon={IconsMenu}
        onClick={handleClick}
      />
    );
  };

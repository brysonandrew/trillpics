import type { FC } from "react";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { usePlayBeats } from "~/hooks/sound/play/beats";
import { RowsBeats } from "~/pages/video/music/drums/beats";
import { DrumsPresets } from "~/pages/video/music/drums/presets";
import { MusicLayoutHeader } from "~/pages/video/music/header";
import { useTrillPicsStore } from "~/store/middleware";
import { boxSize } from "~uno/rules/box/size";

export const MusicLayoutDrums: FC =
  () => {
    const s = boxSize();
    const play = usePlayBeats();

    const { music, set } =
      useTrillPicsStore(
        ({ music, set }) => ({
          music,
          set,
        })
      );
    return (
        <MusicLayoutHeader
          onClick={() => play()}
        
        >
          Drums
        </MusicLayoutHeader>
    );
  };
//   <div
//   className="row uppercase font-sans text-white-1 text-sm grow w-full"
//   style={{ gap: s.m025 }}
// >
//   <LinesHorizontal
//     sizeClass="border-t"
//     opacityClass="opacity-10"
//   />
//   <>Drums</>
// </div>

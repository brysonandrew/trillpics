import type { FC } from "react";
import { PillBXs } from "~/components/buttons/pill/b/xs";
import { ArrowLeft } from "~/components/icons/_pismo/ArrowLeft";
import { ArrowRight } from "~/components/icons/_pismo/ArrowRight";
import { useSequenceButtonsOffset } from "~/pages/video/music/synth/composition/sequence/buttons/offset/hook";

export const SequenceButtonsOffset: FC =
  () => {
    const offset =
      useSequenceButtonsOffset();
    return (
      <div className="row-space absolute top-1/2 -inset-x-7 h-0">
        <PillBXs
          title="offset midis left"
          Icon={ArrowLeft}
          onClick={offset.left}
        >
          left
        </PillBXs>
        <PillBXs
          title="offset midis right"
          Icon={ArrowRight}
          onClick={offset.right}
        >
          right
        </PillBXs>
      </div>
    );
  };

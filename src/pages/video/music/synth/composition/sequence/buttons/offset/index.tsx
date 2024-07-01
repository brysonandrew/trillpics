import type { FC } from "react";
import { PillB } from "~/components/buttons/pill/b";
import { ArrowLeft } from "~/components/icons/_pismo/ArrowLeft";
import { ArrowRight } from "~/components/icons/_pismo/ArrowRight";
import { useSequenceButtonsOffset } from "~/pages/video/music/synth/composition/sequence/buttons/offset/hook";

export const SequenceButtonsOffset: FC =
  () => {
    const offset =
      useSequenceButtonsOffset();
    return (
      <div className="row-space absolute top-1/2 w-full h-0">
        <PillB
          title="offset midis left"
          Icon={ArrowLeft}
          onClick={offset.left}
        >
          left
        </PillB>
        <PillB
          title="offset midis right"
          Icon={ArrowRight}
          onClick={offset.right}
        >
          right
        </PillB>
      </div>
    );
  };

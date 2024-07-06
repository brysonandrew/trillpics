import type { FC } from "react";
import clsx from "clsx";
import { ChartsGridStaff } from "~/components/charts/grid/staff";
import { ChartsGridPlayButton } from "~/components/charts/grid/step/play/button";
import { encryptMidiHoverKey } from "~/components/charts/grid/to-midi-hover-key";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { midiValueToNumber } from "~/utils/music/midi";
import { useMusicRefs } from "~/pages/video/music/_context/refs";

export const SynthRange: FC<{
  rowIndex: number;
}> = ({ rowIndex }) => {
  const { schedule } = useMusicRefs();

  return (
    <ChartsGridStaff
      style={{ opacity: 0.2 }}
    >
      {(index) => {
        const midi =
          (schedule.record.synth.midi ??
            0) + index;
        const n =
          midiValueToNumber(midi);
        const hoverKey =
          encryptMidiHoverKey(
            n,
            -1,
            index
          );

        return (
          <div
            className={clsx(
              "absolute row right-full top-1/2 text-xxxs text-white -translate-y-1/2",
              index % 2 === 0
                ? "-translate-x-5"
                : "-translate-x-0.5"
            )}
          >
            <TypographyXxxs>
              {midi}
            </TypographyXxxs>
            {hoverKey !== null && (
              <ChartsGridPlayButton
                title={`play ${midi}`}
                midi={midi}
                musicKey="midis"
                stepsKey="synth"
                hoverKey={hoverKey}
                rowIndex={rowIndex}
                columnIndex={-1}
              />
            )}
          </div>
        );
      }}
    </ChartsGridStaff>
  );
};

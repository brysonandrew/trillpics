import type { FC } from "react";
import { IconsInfo } from "~/components/icons/info";
import { DecorationNetRounded } from "~/components/decoration/background/net/rounded";
import { useVideoStore } from "~/store";
import { READ_ADD_PIC_TO_VIDEO_INFO } from "~/constants/milestones";
import { TMilestones } from "~/types/milestones";
import clsx from "clsx";
import { useBorderStyleMd } from "~/components/buttons/use-border-style/md";
import { DecorationNet } from "~/components/decoration/background/net";

export const ControlsEmpty: FC = () => {
  const { milestones, updateState } =
    useVideoStore();
  const borderStyle =
    useBorderStyleMd();
  if (
    milestones.includes(
      READ_ADD_PIC_TO_VIDEO_INFO
    )
  )
    return null;

  const handleClick = () => {
    const next: TMilestones = [
      ...milestones,
      READ_ADD_PIC_TO_VIDEO_INFO,
    ];
    updateState({
      milestones: next,
    });
  };
  return (
    <button
      onClick={handleClick}
      className={clsx(
        "fixed column-stretch dark:text-white-5 grow-0 shrink gap-4 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-6 pt-4 pb-6 z-10 char-gap-6",
        "background",
        "_net-gradient"
      )}
      style={borderStyle}
    >
      <div className="relative flex flex-row items-center gap-2 lg:gap-4 shrink-0">
        <IconsInfo />
        <h4 className="whitespace-nowrap text-2.5xl mt-1 md:text-4.5xl">
          Select images
        </h4>
      </div>
      <div className="relative _radial-gradient w-full h-1" />

      <p className="relative text-lg">
        Click on the images you'd like
        to add to your video
      </p>
      <div className="p-2">
        <div className="border border-main w-full" />
      </div>
      <div className="row-space">
        <div className="relative px-4 py-2.5 border border-main hover:_radial-gradient">
          <DecorationNet classValue="inset-2" />
          Cancel
        </div>
        <div className="relative px-4 py-2.5 border border-main hover:_radial-gradient">
          <DecorationNet classValue="inset-2"  />
          Ok
        </div>
      </div>
    </button>
  );
};

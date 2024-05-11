import type { FC } from "react";
import { IconsInfo } from "~/components/icons/info";
import { useTrillPicsStore } from "~/store/middleware";
import { READ__VIDEOS__INFO } from "~/constants/milestones";
import { TMilestones } from "~/types/milestones";
import { ModalOverlay } from "~/components/layout/modal/overlay";

export const VideosModal: FC =
  () => {
    const { milestones, set } =
      useTrillPicsStore(
        ({
          milestones,
          set,
        }) => ({
          milestones,
          set,
        })
      );
    if (
      milestones.includes(
        READ__VIDEOS__INFO
      )
    )
      return null;

    const handleClick = () => {
      const next: TMilestones = [
        ...milestones,
        READ__VIDEOS__INFO,
      ];
      set({
        milestones: next,
      });
    };
    return (
      <ModalOverlay
        onClick={handleClick}
        onOk={handleClick}
        onCancel={handleClick}
        Icon={IconsInfo}
        title="Video's mode"
      >
        Click on the images you'd like
        to add to your video
      </ModalOverlay>
    );
  };

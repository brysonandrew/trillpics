import type { FC } from "react";
import { IconsInfo } from "~/components/icons/info";
import { useVideoStore } from "~/store";
import { READ__DIRECTORS__INFO } from "~/constants/milestones";
import { TMilestones } from "~/types/milestones";
import { ModalOverlay } from "~/components/layout/modal/overlay";

export const DirectorsModal: FC =
  () => {
    const { milestones, updateState } =
      useVideoStore();
    if (
      milestones.includes(
        READ__DIRECTORS__INFO
      )
    )
      return null;

    const handleClick = () => {
      const next: TMilestones = [
        ...milestones,
        READ__DIRECTORS__INFO,
      ];
      updateState({
        milestones: next,
      });
    };
    return (
      <ModalOverlay
        onClick={handleClick}
        onOk={handleClick}
        onCancel={handleClick}
        Icon={IconsInfo}
        title="Director's mode"
      >
        Click on the images you'd like
        to add to your video
      </ModalOverlay>
    );
  };

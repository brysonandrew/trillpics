import type { FC } from "react";
import {
  ModalOverlay,
  TModalOverlayConfig,
} from "~/components/layout/modal/overlay";
import { READ__ZEN__INFO } from "~/constants/milestones";
import { useTrillPicsStore } from "~/store";
import { TMilestones } from "~/types/milestones";

type TProps = TModalOverlayConfig;
export const HideControlsModal: FC<
  TProps
> = (props) => {
  const { milestones, updateState } =
    useTrillPicsStore(
      ({
        milestones,
        updateState,
      }) => ({
        milestones,
        updateState,
      })
    );

  if (
    milestones.includes(READ__ZEN__INFO)
  )
    return null;

  const handleClick = () => {
    const next: TMilestones = [
      ...milestones,
      READ__ZEN__INFO,
    ];
    updateState({
      milestones: next,
    });
  };
  return (
    <ModalOverlay
      onClick={handleClick}
      {...props}
    >
      Move your mouse or pointer off and
      then on the page to bring the
      controls back.
    </ModalOverlay>
  );
};

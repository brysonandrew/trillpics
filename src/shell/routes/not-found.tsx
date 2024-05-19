import type { FC } from "react";
import { ModalOverlay } from "~/components/layout/modal/overlay";
import { Link } from "react-router-dom";
import { useBlurXAnimate } from "~/hooks/blur/animate";

export const NotFound: FC = () => {
  const handler = useBlurXAnimate();

  const blur = () => {
    handler();
  };
  return (
    <Link to="/" onClick={blur}>
      <ModalOverlay
        title="404 Not found"
        classValue="w-2/3"
      >
        Click / tap your screen to go
        back to the pics gallery
      </ModalOverlay>
    </Link>
  );
};

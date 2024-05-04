import type { FC } from "react";
import { animate } from "framer-motion";
import { ModalOverlay } from "~/components/layout/modal/overlay";
import { Link } from "react-router-dom";
import { useVirtualizeContext } from "~/pics/virtualize/context";

export const NotFound: FC = () => {
  const { blurRef } =
    useVirtualizeContext();
  const blur = () => {
    const prev =
      blurRef.current.value.x.get();
    blurRef.current.control.x = animate(
      blurRef.current.value.x,
      100,
      {
        type: "tween",
        onComplete: () =>
          blurRef.current.value.x.set(
            prev
          ),
      }
    );
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

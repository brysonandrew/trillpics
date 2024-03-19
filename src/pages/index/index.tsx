import { useKey } from "@brysonandrew/hooks-dom";
import { Collection } from "@components/collection";
import { Pics } from "@components/collection/variants/Pics";
import { Footer } from "@pages/index/footer";
import { useVideoStore } from "@pages/index/video/store";

export const Index = () => {
  const {
    isVideoMode,
    toggleVideoMode,
  } = useVideoStore();
  useKey({
    handlers: {
      onKeyDown: ({ ctrlKey }) => {
        if (ctrlKey) {
          toggleVideoMode();
        }
      },
      onKeyUp: ({ ctrlKey }) => {
        if (!ctrlKey) {
          toggleVideoMode(false);
        }
      },
    },
    isDisabled: false,
  });
  return (
    <>
      <Collection>
        <Pics />
      </Collection>
      <Footer />
    </>
  );
};

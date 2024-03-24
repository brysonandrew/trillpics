import { useKey } from "@brysonandrew/hooks-dom";
import { Collection } from "@components/collection";
import { Pics } from "@components/collection/variants/Pics";
import { Footer } from "@pages/home/footer";
import { useVideoStore } from "@pages/home/video/store";

export const Home = () => {
  // const { toggleVideoMode } =
  //   useVideoStore();
  // useKey({
  //   handlers: {
  //     onKeyDown: ({ ctrlKey }) => {
  //       if (ctrlKey) {
  //         toggleVideoMode();
  //       }
  //     },
  //     onKeyUp: ({ ctrlKey }) => {
  //       if (!ctrlKey) {
  //         toggleVideoMode(false);
  //       }
  //     },
  //   },
  //   isDisabled: false,
  // });
  return (

      <Collection>
        <Pics />
      </Collection>

  );
};

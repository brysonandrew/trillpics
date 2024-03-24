import { Collection } from "@components/collection";
import { Pics } from "@components/collection/variants/Pics";

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

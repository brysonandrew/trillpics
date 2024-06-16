import { FC } from "react";
import { AnimatePresence } from "framer-motion";
import { AddRemoveIcon } from "~/pages/video/_root/cursor/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { Video_RootReorder } from "~/pages/video/_root/reorder";
import { useVideoSelect } from "~/pages/video/_root/hooks/select";
import { useVideo_RootTutorial } from "~/pages/video/_root/hooks/tutorial";
import { Video_RootTutorial } from "~/pages/video/_root/tutorial";

export const Video_Root: FC = () => {
  const props = useVideoSelect();
  const isRunning =
    useVideo_RootTutorial(props);
  return (
    <>
      <PicCursor {...props}>
        <AddRemoveIcon
          isAdded={props.isAdded}
        />
      </PicCursor>
      <AnimatePresence>
        {isRunning && (
          <Video_RootTutorial key="Video_RootTutorial" />
        )}
      </AnimatePresence>
      <Video_RootReorder {...props} />
    </>
  );
};

import { FC } from "react";
import { AddRemoveIcon } from "~/pages/video/_root/cursor/add-remove-icon";
import { useVideoClickSelect } from "~/pages/video/_root/select";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { Video_RootReorder } from "~/pages/video/_root/reorder";

export const Video_Root: FC = () => {
  const props = useVideoClickSelect();
  return (
    <>
      <PicCursor {...props}>
        <AddRemoveIcon
          isAdded={props.isAdded}
        />
      </PicCursor>
      <Video_RootReorder {...props} />
    </>
  );
};

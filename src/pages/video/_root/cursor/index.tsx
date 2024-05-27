import type { FC } from "react";
import { AddRemoveIcon } from "~/pages/video/_root/cursor/add-remove-icon";
import { PicCursor } from "~/pics/grid/pic/cursor";
import { useVideoClickSelect } from "~/pages/video/_root/select";
import { _CommonReorder } from "~/pages/video/_root/reorder";

export const Video_RootCursor: FC =
  () => {
    const props = useVideoClickSelect();

    return (
      <>
        <PicCursor {...props}>
          <AddRemoveIcon
          
            isAdded={props.isAdded}
          />
        </PicCursor>
        <footer className="h-0 w-full">
          <_CommonReorder {...props} />
        </footer>
      </>
    );
  };

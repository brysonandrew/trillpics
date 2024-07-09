import { FC } from "react";
import { box } from "~uno/rules/box";
import { useContextReady } from "~/shell/ready/context";
import { _RootReorderList } from "~/pages/video/_root/reorder/list";
import { _RootReorderDraggerSides } from "~/pages/video/_root/reorder/dragger/sides";
import { _RootReorderControlsSides } from "~/pages/video/_root/reorder/controls/sides";
import { _RootReorderDraggerTop } from "~/pages/video/_root/reorder/dragger/top";
import { _RootReorderPlaceholders } from "~/pages/video/_root/reorder/placeholders";
import { _RootReorderBackground } from "~/pages/video/_root/reorder/background";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";
import { useTrillPicsStore } from "~/store/middleware";
import { TUsePicSelected } from "~/hooks/pic/selected";

export const Video_RootReorder: FC<
TUsePicSelected
> = (props) => {
  const {
    screen: { container },
  } = useContextReady();
  

  useDraggerReset({
    to: 0,
    from: box._4,
  });


  return (
    <footer
      className="relative h-0 w-full z-10"
      style={{
        left: container.left - box._,
        bottom:
          container.height / 2 + box._2,
        width: container.width + box._,
      }}
    >
  
      <_RootReorderBackground />
      <_RootReorderPlaceholders names={props.names} />
      <_RootReorderList {...props} />
      <_RootReorderControlsSides />
      <_RootReorderDraggerSides />
      <_RootReorderDraggerTop />
    </footer>
  );
};

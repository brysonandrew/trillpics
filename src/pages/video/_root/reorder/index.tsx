import { FC } from "react";
import { boxSize } from "~uno/rules/box/size";
import { useReadyContext } from "~/shell/ready/context";
import { _RootReorderList } from "~/pages/video/_root/reorder/list";
import { TUseVideoClickSelect } from "~/pages/video/_root/select";
import { _RootReorderDraggerSides } from "~/pages/video/_root/reorder/dragger/sides";
import { _RootReorderControlsSides } from "~/pages/video/_root/reorder/controls/sides";
import { _RootReorderDraggerTop } from "~/pages/video/_root/reorder/dragger/top";
import { _RootReorderPlaceholders } from "~/pages/video/_root/reorder/placeholders";
import { _RootReorderBackground } from "~/pages/video/_root/reorder/background";
import { useDraggerReset } from "~/pages/video/_root/reorder/use-dragger-reset";

export const Video_RootReorder: FC<
  TUseVideoClickSelect
> = (props) => {
  const {
    screen: { container },
  } = useReadyContext();
  const s = boxSize();

  useDraggerReset({
    to: 0,
    from: s.m4,
  });
  return (
    <footer
      className="relative h-0 w-full z-10"
      style={{
        left: container.left - s.m,
        bottom: container.height / 2+s.m,
        width: container.width + s.m,
      }}
    >
      <_RootReorderBackground />
      <_RootReorderPlaceholders />
      <_RootReorderList {...props} />
      <_RootReorderControlsSides />
      <_RootReorderDraggerSides />
      <_RootReorderDraggerTop />
    </footer>
  );
};

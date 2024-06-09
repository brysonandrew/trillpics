import type { FC } from "react";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";

export const _RootReorderDraggerTop: FC =
  () => {
    const {
      screen: { container },
    } = useReadyContext();

    const s = boxSize();

    const isColumn =
      container.width < 600;
    const left =
      (container.width) / 2 +s.m05;//- size;

    return (
      <_RootReorderDragger
        title="Drag video pics grid"
        isColumn={isColumn}
        left={left}
        container={container}
        style={{scale:1.28}}
      />
    );
  };

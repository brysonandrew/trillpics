import type { FC } from "react";
import { _RootReorderDragger } from "~/pages/video/_root/reorder/dragger";
import { useContextReady } from "~/shell/ready/context";
import { box } from "~uno/rules/box";

export const _RootReorderDraggerTop: FC =
  () => {
    const {
      screen: { container },
    } = useContextReady();

    

    const isColumn =
      container.width < 600;
    const left =
      (container.width) / 2 +box.m05;//- size;

    return (
      <_RootReorderDragger
        title="Drag Sequence grid"
        isColumn={isColumn}
        left={left}
        container={container}
        style={{scale:1.28}}
      />
    );
  };

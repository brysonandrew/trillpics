import type { FC } from "react";
import { LinesHorizontalLight } from "~/components/lines/horizontal/light";
import { useVideoStyle } from "~/pages/video/style";
import { box } from "~uno/rules/box";

export const LayoutBorderTop: FC = () => {
  const s = box;
  const {
    width,
  } = useVideoStyle();
  return (
    <LinesHorizontalLight
      style={{
        left: box._025 + box._0125,
        top: -box._075,
        width: width - box._2,
      }}
    />
  );
};

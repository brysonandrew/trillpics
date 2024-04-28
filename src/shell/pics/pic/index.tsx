import type { FC } from "react";
import { TPicCell } from "~/store/slices/table/types";
import { useNavigationActive } from "~/hooks/use-navigation/active";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";
import { PicBase } from "~/shell/pics/pic/base";

export type TPicProps = {
  colIndex: number;
  cell: TPicCell;
  size: number;
  maxColsCount: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  const isDirectorsMode =
    useNavigationActive(
      DIRECTORS_MODE_PATH_VALUE
    );
  const Component = isDirectorsMode
    ? PicDirectorsMode
    : PicBase;
  return <Component {...props} />;
};

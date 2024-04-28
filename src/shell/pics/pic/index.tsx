import type { FC } from "react";
import { PicBase } from "~/shell/pics/pic/base";
import { TPic } from "~/store/slices/pics/types";

export type TPicProps = {
  name: TPic;
  columnIndex: number;
  rowIndex: number;
};
export const Pic: FC<TPicProps> = (
  props
) => {
  return (
    <PicBase
      key={props.name}
      {...props}
    />
  );
};

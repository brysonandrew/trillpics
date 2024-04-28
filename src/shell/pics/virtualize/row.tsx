import { FC } from "react";
import type { ListChildComponentProps } from "react-window";
import { TPic } from "~/store/slices/pics/types";
import { TPicsRows } from "~/store/slices/table/types";
import { Cell } from "./cell";

type TProps =
  ListChildComponentProps<TPicsRows>;
export const Row: FC<TProps> = (
  props
) => {
  const pics = props.data[props.index];
  return (
    <div
      className="row"
      style={{
        ...props.style,
      }}
    >
      {pics.columns.map(
        (pic: TPic, columnIndex) => {
          return (
            <Cell
              key={`${pic}`}
              name={pic}
              columnIndex={columnIndex}
              rowIndex={props.index}
            />
          );
        }
      )}
    </div>
  );
};

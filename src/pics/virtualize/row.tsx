import { FC } from "react";
import type { ListChildComponentProps } from "react-window";
import { TPic } from "~/store/state/pics/types";
import { TPicsRows } from "~/store/state/table/types";
import { Cell } from "./cell";

type TProps =
  ListChildComponentProps<TPicsRows>;
export const Row: FC<TProps> = (
  props
) => {
  const pics = props.data[props.index];
  return (
    <li
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
              cell={{
                column: columnIndex,
                row: props.index,
              }}
            />
          );
        }
      )}
    </li>
  );
};

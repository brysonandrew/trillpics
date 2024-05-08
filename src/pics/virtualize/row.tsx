import { FC } from "react";
import type { ListChildComponentProps } from "react-window";
import { Pic } from "~/pics/pic";
import { TPic } from "~/store/state/pics/types";
import { TPicsRows } from "~/store/state/table/types";

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
            <Pic
              key={`${pic}`}
              name={pic}
              {...{
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

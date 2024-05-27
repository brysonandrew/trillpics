import { FC, Fragment } from "react";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import type { ListChildComponentProps } from "react-window";
import { LinesBackground } from "~/components/lines/background";
import { LinesHorizontal } from "~/components/lines/horizontal";
import { LinesHorizontal1 } from "~/components/lines/horizontal/1";
import { LinesVertical } from "~/components/lines/vertical";
import { Pic } from "~/pics/grid/pic";
import { TPic } from "~/store/state/pics/types";
import { TPicsRows } from "~/store/state/table/types";

type TProps =
  ListChildComponentProps<TPicsRows>;
export const Row: FC<TProps> = ({
  data,
  index: rowIndex,
  style,
}) => {
  const pics = data[rowIndex];
  const {
    width,
    left,
    top,
    ...lineStyle
  } = style;
  return (
    <li style={style}>
      {rowIndex > 0 && (
        <LinesBackground />
      )}
      {pics.columns.map(
        (
          pic: TPic,
          columnIndex,
          { length: count }
        ) => {
          return (
            <Fragment
              key={resolveCompositeKey(
                "cell",
                pic
              )}
            >
              {columnIndex > 0 && (
                <LinesBackground
                  Root={LinesVertical}
                  style={{
                    ...lineStyle,
                    left: `${(
                      100 *
                      (columnIndex /
                        count)
                    ).toFixed(2)}%`,
                  }}
                />
              )}
              <Pic
                name={pic}
                column={columnIndex}
                row={rowIndex}
              />
            </Fragment>
          );
        }
      )}
    </li>
  );
};

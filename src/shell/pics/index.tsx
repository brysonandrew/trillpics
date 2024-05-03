import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store";
import { TPartialFixedTableProps } from "~/store/state/table/types";
import { Virtualize } from "~/shell/pics/virtualize";
import { useVirtualizeContext } from "~/shell/pics/virtualize/context";

type TProps = TPartialFixedTableProps;
export const Pics: FC<TProps> = (
  props
) => {
  const { onScroll, ref } =
    useVirtualizeContext();
  const { table, screen } =
    useTrillPicsStore(
      ({
        table,
        screen,
        updateState,
      }) => ({
        table,
        screen,
        updateState,
      })
    );

  return (
    <>
      {table.isVerticalScroll && (
        <ScrollbarSeam />
      )}
      {screen.isDimensions && (
        <Virtualize
          rows={table.rows}
          size={table.size}
          onScroll={onScroll}
          ref={ref}
          {...props}
          width={screen.width}
          height={screen.height}
        />
      )}
    </>
  );
};

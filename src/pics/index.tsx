import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store/middleware";
import { TPartialFixedTableProps } from "~/store/state/table/types";
import { Grid } from "~/pics/grid";
import { useContextGrid } from "~/context";
import { Outlet } from "react-router";

type TProps = TPartialFixedTableProps;
export const Pics: FC<TProps> = (
  props
) => {
  const { onScroll, ref, screen } =
    useContextGrid();
  const { table } = useTrillPicsStore(
    ({ table }) => ({
      table,
    })
  );

  return (
    <>
      {table.isVerticalScroll && (
        <ScrollbarSeam />
      )}
      <Grid
        rows={table.rows}
        count={table.count}
        size={table.size}
        onScroll={onScroll}
        ref={ref}
        {...props}
        width={screen.width}
        height={screen.height}
      />
      <Outlet />
    </>
  );
};

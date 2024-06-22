import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store/middleware";
import { Grid } from "~/pics/grid";
import { useReadyContext } from "~/shell/ready/context";

export const Pics: FC = () => {
  const { onScroll, ref, screen } =
    useReadyContext();
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
        width={screen.width}
        height={screen.height}
      />
    </>
  );
};

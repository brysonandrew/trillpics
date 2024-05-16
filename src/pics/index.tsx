import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store/middleware";
import { TPartialFixedTableProps } from "~/store/state/table/types";
import { Grid } from "~/pics/grid";
import { useContextGrid } from "~/context";
import { Outlet } from "react-router";
import { Hud } from "~/pics/hud";

type TProps = TPartialFixedTableProps;
export const Pics: FC<TProps> = (
  props
) => {
  const { onScroll, ref,headerValue,updateFooter,updateHeader } =
    useContextGrid();
  const { table, screen, isControls } =
    useTrillPicsStore(
      ({
        table,
        screen,
        isControls,
      }) => ({
        table,
        screen,
        isControls,
      })
    );

  return (
    <>
 
      <div style={{ height: 0 }}
       ref={(instance) => {
        if (
          instance &&
          headerValue === null
        ) {
          updateHeader(instance);
        }
      }}
      >
        {/* <SpeedlinesBackward /> */}
        {/* {scrollDirection ===
          "forward" && (
          <SpeedlinesForward />
        )}
        {scrollDirection ===
          "backward" && (
          <SpeedlinesBackward />
        )} */}
        {table.isVerticalScroll && (
          <ScrollbarSeam />
        )}
      </div>
      {screen.isDimensions && (
        <Grid
          rows={table.rows}
          size={table.size}
          onScroll={onScroll}
          ref={ref}
          {...props}
          width={screen.width}
          height={screen.height}
        />
      )}
      <Outlet />
   
            
    </>
  );
};

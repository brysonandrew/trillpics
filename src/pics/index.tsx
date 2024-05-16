import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store/middleware";
import {
  TPartialFixedTableProps,
  TTableState,
} from "~/store/state/table/types";
import { Grid } from "~/pics/grid";
import { useContextGrid } from "~/context";
import { Outlet } from "react-router";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/pics/header/left";
import { HeaderRight } from "~/pics/header/right";
import { Screen } from "~/shell/screen";
import { Header } from "~/pics/header";
import { Hud } from "~/pics/hud";

const OUTLET_CONTEXT = {
  Header,
  HeaderLeft,
  HeaderRight,
  Screen,
  Footer,
  FooterLeft,
} as const;
export type TOutletContext =
  typeof OUTLET_CONTEXT & {
    picsTable: TTableState;
  };
type TProps = TPartialFixedTableProps;
export const Pics: FC<TProps> = (
  props
) => {
  const { onScroll, ref } =
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
      <div style={{ height: 0 }}>
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
      <Outlet
        context={{
          ...OUTLET_CONTEXT,
        }}
      />
      {screen.isDimensions &&
        screen.container
          .isDimensions && (
          <Hud
            dimensions={{
              container:
                screen.container,
              screen: {
                width: screen.width,
                height: screen.height,
              },
            }}
            isVerticalScroll={
              table.isVerticalScroll
            }
          />
        )}
    </>
  );
};

import { FC } from "react";
import {
  animate,
  useMotionValueEvent,
} from "framer-motion";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store";
import {
  TPartialFixedTableProps,
  TTableState,
} from "~/store/state/table/types";
import { Grid } from "~/pics/grid";
import { useVirtualizeContext } from "~/context";
import { Outlet } from "react-router";
import { Header } from "~/shell/header";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";
import { SpeedlinesBackward } from "~/pics/grid/speedlines/backward";
import { SpeedlinesForward } from "~/pics/grid/speedlines/forward";
import { TexturesMesh } from "~/components/textures/mesh";

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
  const {
    onScroll,
    ref,
    scrollY,
    main,
  } = useVirtualizeContext();
  const {
    table,
    scrollDirection,
    scrollDelta,
    screen,
  } = useTrillPicsStore(
    ({
      table,
      screen,
      scrollDirection,
      scrollDelta,
      set,
    }) => ({
      table,
      screen,
      scrollDirection,
      scrollDelta,
      set,
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
    </>
  );
};

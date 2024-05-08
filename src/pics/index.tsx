import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store";
import {
  TPartialFixedTableProps,
  TTableState,
} from "~/store/state/table/types";
import { Virtualize } from "~/pics/virtualize";
import { useVirtualizeContext } from "~/pics/virtualize/context";
import { Outlet } from "react-router";
import { Header } from "~/shell/header";
import { Footer } from "~/shell/footer";
import { FooterLeft } from "~/shell/footer/left";
import { HeaderLeft } from "~/shell/header/left";
import { HeaderRight } from "~/shell/header/right";
import { Screen } from "~/shell/screen";

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
    useVirtualizeContext();
  const { table, screen } =
    useTrillPicsStore(
      ({ table, screen, set }) => ({
        table,
        screen,
        set,
      })
    );


  return (
    <>
      {/* {table.isVerticalScroll && (
        <ScrollbarSeam />
      )} */}
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
      <Outlet
        context={{
          ...OUTLET_CONTEXT,
        }}
      />
    </>
  );
};

import { FC } from "react";
import { ScrollbarSeam } from "~/components/layout/scrollbar-seam";
import { useTrillPicsStore } from "~/store";
import { TPartialFixedTableProps } from "~/store/slices/table/types";
import { Virtualize } from "~/shell/pics/virtualize";

type TProps = TPartialFixedTableProps;
export const Pics: FC<TProps> = ({
  ...props
}) => {
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

          {...table}
          {...props}
          {...screen}
        />
      )}
    </>
  );
};

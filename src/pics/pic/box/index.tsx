import { FC } from "react";
import { useBox } from "~/pics/pic/box/use-box";
import { useTrillPicsStore } from "~/store";
import { TDimensions } from "@brysonandrew/config-types";
import { TCell, TPicProps } from "~/pics/pic";
import { padBox } from "~/pics/pic/pad-box";
import { SCROLLBAR_BORDER_WIDTH } from "~uno/preflights";

type TBaseBoxChildProps = TPicProps & {
  style: TDimensions & {
    left: number;
  };
};
export type TBoxChildProps =
  TBaseBoxChildProps;
type TProps = TCell &
  TPicProps & {
    cursor: "pointer" | "zoom-in";
    children(
      props: TBoxChildProps,
      isPicZoomed: boolean
    ): JSX.Element;
  };
export const Box: FC<TProps> = ({
  children,
  cursor,
  column,
  row,
  ...props
}) => {
  const isPicZoomed = useBox({
    column,
    row,
  });
  const { table } = useTrillPicsStore(
    ({ table }) => ({
      table,
    })
  );

  const left = column * table.size;
  return (
    <>
      <div
        className="_gradient-mesh"
        style={{
          position: "absolute",
          ...padBox({
            size: table.size,
            left,
          }),
          cursor,
        }}
      />
      <>
        {children(
          {
            ...props,
            style: {
              ...padBox({
                size: table.size,
                left,
                value: 0,
              }),
              left: left + SCROLLBAR_BORDER_WIDTH * column,
            },
            row,
            column,
          },
          isPicZoomed
        )}
      </>
    </>
  );
};

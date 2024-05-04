import { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { useBox } from "~/pics/pic/box/use-box";
import { useTrillPicsStore } from "~/store";
import { TDimensions } from "@brysonandrew/config-types";
import { TPicProps } from "~/pics/pic";
import { TPicHoverResult } from "~/pics/pic/use-hover";
import {
  P,
  HP,
} from "~/pics/pic/constants";

type TBaseBoxChildProps = TPicProps & {
  style: TDimensions & {
    left: number;
  };
};
export type TBoxChildProps =
  TBaseBoxChildProps;
type TProps = Partial<TPicHoverResult> &
  TPicProps & {
    cursor: "pointer" | "zoom-in";
    children(
      props: Partial<TPicHoverResult> &
        TBoxChildProps,
      isPicZoomed: boolean
    ): JSX.Element;
  };
export const Box: FC<TProps> = ({
  children,
  cursor,
  cell,
  ...props
}) => {
  const isPicZoomed = useBox({ cell });
  const { table } = useTrillPicsStore(
    ({ table }) => ({
      table,
    })
  );
  const dimensions: TDimensions =
    resolveSquare(table.size - P);
  const left = cell.column * table.size;
  return (
    <>
      <div
        className="_gradient-mesh"
        style={{
          position: "absolute",
          ...dimensions,
          left: left + HP,
          top: HP,
          cursor,
        }}
        {...props.handlers}
      />
      <>
        {children(
          {
            ...props,
            cell,
            style: {
              left,
              ...dimensions,
            },
          },
          isPicZoomed
        )}
      </>
    </>
  );
};

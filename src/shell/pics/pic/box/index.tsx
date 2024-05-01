import { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import {
  TUseBox,
  useBox,
} from "~/shell/pics/pic/box/use-box";
import { useTrillPicsStore } from "~/store";
import { TDimensions } from "@brysonandrew/config-types";
import { TPicProps } from "~/shell/pics/pic";
import { TPicHoverResult } from "~/shell/pics/pic/use-hover";
import {
  P,
  HP,
} from "~/shell/pics/pic/constants";

type TOmitUseBox = Omit<
  TUseBox,
  "isPicZoomed"
>;
type TBaseBoxChildProps = TPicProps &
  TOmitUseBox &
  TDimensions & {
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
  ...props
}) => {
  const { isPicZoomed, ...box } =
    useBox(props);
  const { table } = useTrillPicsStore(
    ({ table }) => ({
      table,
    })
  );

  const dimensions: TDimensions =
    resolveSquare(table.size - P);
  const left =
    props.columnIndex * table.size;
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
      ></div>
      <>
        {children(
          {
            ...dimensions,
            ...box,
            ...props,
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

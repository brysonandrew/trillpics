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

type TOmitUseBox = Omit<
  TUseBox,
  "isPicZoomed"
>;
type TBaseBoxChildProps = TPicProps &
  TOmitUseBox &
  TDimensions;
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
    resolveSquare(table.size);
  return (
    <div
      style={{
        position: "absolute",
        ...dimensions,
        left:
          props.columnIndex *
          table.size,
        cursor,
      }}
      {...props.handlers}
    >
      {children(
        {
          ...dimensions,
          ...box,
          ...props,
        },
        isPicZoomed
      )}
    </div>
  );
};

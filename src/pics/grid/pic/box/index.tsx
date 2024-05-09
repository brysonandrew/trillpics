import { FC } from "react";
import { useTrillPicsStore } from "~/store";
import { TDimensions } from "@brysonandrew/config-types";
import {
  TCell,
  TPicProps,
} from "~/pics/grid/pic";
import { padBox } from "~/pics/grid/pic/pad-box";
import { GRADIENT_MESH_DARK } from "~app/color/gradient/mesh";

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
      props: TBoxChildProps
    ): JSX.Element;
  };
export const Box: FC<TProps> = ({
  children,
  cursor,
  column,
  row,
  ...props
}) => {
  const { table } = useTrillPicsStore(
    ({ table }) => ({
      table,
    })
  );

  const left = column * table.size;
  return (
    <>
      <div
        style={{
          ...GRADIENT_MESH_DARK,
          backgroundSize: "2px 2px",
          position: "absolute",
          ...padBox({
            size: table.size,
            left,
          }),
          cursor,
        }}
      />
      <>
        {children({
          ...props,
          style: {
            ...padBox({
              size: table.size,
              left,
              value: 0,
            }),
            left,
          },
          row,
          column,
        })}
      </>
    </>
  );
};

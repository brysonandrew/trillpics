import { FC } from "react";
import { TDimensions } from "@brysonandrew/config-types";
import {
  TCell,
  TPicProps,
} from "~/pics/grid/pic";
import { padBox } from "~/pics/grid/pic/pad-box";
import { usePicTableReadSize } from "~/hooks/pic/table/read/size";
import { resolveSquare } from "@brysonandrew/measure";

type TBaseBoxChildProps = TPicProps & {
  style: TDimensions & {
    left: number;
  };
};
export type TBoxChildProps =
  TBaseBoxChildProps;
type TProps = TCell &
  TPicProps & {
    children(
      props: TBoxChildProps
    ): JSX.Element | null;
  };
export const Box: FC<TProps> = ({
  children,
  column,
  row,
  ...props
}) => {
  const size = usePicTableReadSize();
  const left = column * size;

  return (
    <>
      {/* <div
        className="_bi-mesh"
        style={{
          position: "absolute",
          left,
          ...resolveSquare(size)
        }}
      /> */}
      <>
        {children({
          ...props,
          style: {
            ...padBox({
              size: size,
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

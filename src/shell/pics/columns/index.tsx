import {
  FC,
  useEffect,
  useMemo,
} from "react";
import { animate } from "framer-motion";
import { createColumnHelper } from "@tanstack/react-table";
import { TRow } from "~/shell/pics/use-pics-table";
import {
  Pic as PicHome,
  TPicProps,
} from "~/shell/pics/pic";
import { useLocation } from "react-router";
import { DIRECTORS_MODE_PATH_VALUE } from "~/constants/params";
import { PicDirectorsMode } from "~/shell/pics/pic/directors-mode";
import { useScroll } from "~/context/scroll";

export const usePicsColumns = (
  rows: TRow[],
  size: number,
  PicFc?: FC<TPicProps>
) => {
  const columnHelper =
    createColumnHelper<TRow>();
  const { pathname } = useLocation();
  const { blurX, blurXRef } =
    useScroll();
  useEffect(() => {
    blurXRef.current = animate(
      blurX,
      60,
      {
        duration: 0.4,
        type: "tween",
        onComplete: () => blurX.set(0),
      }
    );
  }, [pathname]);
  const results = useMemo(() => {
    const isD = pathname.includes(
      DIRECTORS_MODE_PATH_VALUE
    );
    const Pic = isD
      ? PicDirectorsMode
      : PicHome;
    const firstRowColsCount =
      rows[0]?.cols.length ?? null;
    if (
      firstRowColsCount === null ||
      firstRowColsCount < 1
    )
      return [];
    return [
      ...Array(firstRowColsCount),
    ].map((_, index) => {
      const col = columnHelper.accessor(
        "cols",
        {
          cell: (cell) => {
            return (
              <Pic
                colIndex={index}
                cell={cell}
                size={size}
                maxColsCount={
                  firstRowColsCount
                }
              />
            );
          },
        }
      );
      return col;
    });
  }, [rows, pathname]);

  return results;
};

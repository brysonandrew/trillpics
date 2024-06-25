import { useMemo } from "react";
import { TGridsRecordProps } from "~/pages/video/music/_context/init/refs/grid/types";

export const useRefsGrid = () => {
  const grid =
    useMemo<TGridsRecordProps>(() => {
      return {
        record: {},
      };
    }, []);
  return grid;
};

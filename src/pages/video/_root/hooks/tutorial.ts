import {
  useEffect,
  useMemo,
  useState,
} from "react";
import { useTrillPicsStore } from "~/store/middleware";
import { useContextReady } from "~/shell/ready/context";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { TUsePicSelected } from "~/hooks/pic/selected";
const STAGGER_MS = 400;
export const useVideo_RootTutorial = (
  config: TUsePicSelected
) => {
  const [isRunning, setRunning] =
    useState(false);
  const interval = useMemo<{
    timer: number | null;
    index: number;
    direction: number;
  }>(
    () => ({
      timer: null,
      index: 0,
      direction: 1,
    }),
    []
  );

  const { scrollY } = useContextReady();
  const { pics, table } =
    useTrillPicsStore(
      ({ pics, table }) => ({
        table,
        pics,
      })
    );

  const handleEnd = () => {
    window.clearInterval(
      interval.timer || 0
    );
    setRunning(false);
    config.select([]);
    return;
  };

  useEffect(() => {
    if (config.count === 0) {
      setRunning(true);
      const currScroll = scrollY.get();
      const currRow = Math.floor(
        Math.abs(
          currScroll / table.size
        )
      );

      const names = [
        ...Array(MAX_COUNT),
      ].map((_, columnIndex) => {
        const cellIndex =
          currRow *
            table.count.columns +
          columnIndex;

        return pics[cellIndex];
      });
      const add = () => {
        if (interval.index === -1) {
          handleEnd();
        }
        const name =
          names[interval.index];
        if (name) {
          if (
            interval.direction === -1
          ) {
            config.deselect(name);
          } else {
            config.select(
              names.slice(
                0,
                interval.index + 1
              )
            );
          }
        } else {
          interval.direction = -1;
        }

        interval.index =
          interval.index +
          interval.direction;
      };

      interval.timer =
        window.setInterval(
          add,
          STAGGER_MS
        );
    }
    return () =>
      window.clearInterval(
        interval.timer || 0
      );
  }, []);

  return {
    isRunning,
    onEnd: handleEnd,
  };
};

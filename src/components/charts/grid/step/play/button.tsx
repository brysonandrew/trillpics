import { motion } from "framer-motion";
import { isNull } from "~/utils/validation/is/null";
import { resolvePlayVolume } from "~/hooks/music/play/volume";
import { TMusicKey } from "~/store/state/music/types";
import { useStepPlay } from "~/components/charts/grid/step/play";
import { NOOP } from "@brysonandrew/utils-function";
import { TButtonMotionProps } from "@brysonandrew/config-types";
import { TMidiValue } from "~/hooks/music/midis/types";
import clsx from "clsx";
import { useHoverKey } from "~/hooks/use-hover-key";
import { TGridsBaseConfig } from "~/pages/video/music/_context/init/refs/grid/types";

type TProps<T extends TMusicKey> =
  TGridsBaseConfig<T> &
    TButtonMotionProps & {
      midi: TMidiValue;
      hoverKey: string;
      isDisabled?: boolean;
    };
export const ChartsGridPlayButton = <
  T extends TMusicKey
>(
  props: TProps<T>
) => {
  const {
    midi,
    classValue,
    hoverKey,
    isDisabled,
    columnIndex,
    style,
  } = props;
  const { handlers, isHover } =
    useHoverKey();
  const isHovering = isHover(hoverKey);
  const handleStepPlayback =
    useStepPlay(midi, props);

  const handlePlay = () => {
    console.log("PLAY");
    handleStepPlayback.play();
  };
  const handleStop = () =>
    handleStepPlayback.stop();

  return (
    <motion.button
      className={clsx(
        "fill",
        isHovering
          ? classValue
          : "bg-black hover:bg-gray active:white"
      )}
      whileTap={{
        opacity: 0.15,
      }}
      onPointerDown={
        isDisabled ? NOOP : handlePlay
      }
      {...(false
        ? {
            onPointerMove: handleStop,
            onPointerLeave: handleStop,
            onPointerOut: handleStop,
          }
        : {})}
      onPointerUp={handleStop}
      disabled={isDisabled}
      style={{
        opacity:
          resolvePlayVolume(
            columnIndex
          ) /
            12 +
          (isHovering ? 0.1 : 0.05),
        ...style,
      }}
      {...(isNull(midi) || isDisabled
        ? {}
        : handlers(hoverKey))}
    />
  );
};

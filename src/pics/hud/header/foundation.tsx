import { FC } from "react";
import { motion } from "framer-motion";
import { HeaderLeft } from "~/pics/header/left";
import { useContextGrid } from "~/context";
import { TDimensions } from "@brysonandrew/config-types";
import { useTimebomb } from "~/hooks/use-time-bomb";
import { boxSize } from "~/constants/box/size";

type TProps = {
  container: TDimensions;
};
export const PicsHudHeaderFoundation: FC<
  TProps
> = () => {
  const {
    fonts,
    updateFoundation,
    foundationValue,
  } = useContextGrid();

  const isFontReady =
    fonts["Dragon"].active &&
    fonts["Toxigenesis"].active;

  const saveFoundation = (
    instance: HTMLDivElement
  ) => {
    const rect =
      instance.getBoundingClientRect();

    updateFoundation(rect);
  };

  const {
    trigger,
    isArmed: isSavingDelayed,
  } = useTimebomb(100, saveFoundation);
  const s = boxSize();

  return (
    <>
      {isFontReady && (
        <motion.div
          className="absolute top-0"
          initial={{ opacity: 0 }}
          animate={{
            opacity: isSavingDelayed
              ? 0.5
              : 1,
          }}
          ref={(instance) => {
            if (
              instance &&
              !foundationValue
            ) {
              trigger(instance);
            }
          }}
          exit={{ opacity: 0 }}
        >
          <HeaderLeft />
        </motion.div>
      )}
    </>
  );
};

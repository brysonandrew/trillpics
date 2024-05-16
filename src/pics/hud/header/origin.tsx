import { FC } from "react";
import { motion } from "framer-motion";
import { HeaderLeft } from "~/pics/header/left";
import { useContextGrid } from "~/context";
import { TDimensions } from "@brysonandrew/config-types";
import { useTimebomb } from "~/hooks/use-time-bomb";

type TProps = {
  dimensions: TDimensions;
};

export const PicsHudHeaderOrigin: FC<
  TProps
> = () => {
  const { fonts, main } =
    useContextGrid();

  const isFontReady =
    fonts["Saiba 45"].active;

  const saveOrigin = (
    instance: HTMLDivElement
  ) => {
    const rect =
      instance.getBoundingClientRect();

    main.origin.update(rect);
  };
  const { trigger, isArmed } =
    useTimebomb(100, saveOrigin);

  return (
    <>
      {isFontReady && (
        <motion.div
          className="absolute top-0 left-0"
          initial={false}
          animate={{
            opacity: isArmed ? 0.5 : 1,
          }}
          ref={(instance) => {
            if (
              instance &&
              !main.origin.value
            ) {
              trigger(instance);
              main.ui.origin =
                instance;
            }
          }}
        >
          <HeaderLeft />
        </motion.div>
      )}
    </>
  );
};

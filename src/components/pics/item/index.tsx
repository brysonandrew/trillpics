import { FC } from "react";
import { motion } from "framer-motion";
import { TResolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { useImage } from "@components/pics/useImage";
import { TPassedProps } from "@components/pics/item/pic/config/types";
import { ActiveBackground } from "@shell/header/right/active-background";
import { FadeV } from "@brysonandrew/fade";
import { Pic } from "@components/pics/item/pic";
import { BORDER_GRADIENT, TEXT_GRADIENT } from "@constants/css/gradient";

type TProps = TPassedProps & {
  imageConfig: TResolveConfigFromSize;
  name: number;
};
export const Item: FC<TProps> = ({
  name,
  imageConfig,
  ...passedProps
}) => {
  const imageReturn = useImage({
    name,
    ...imageConfig,
  });

  const { boxProps, ...rest } =
    imageReturn;
  const {
    isHover,
    isVideoMode,
    videoOrder,
  } = rest;

  return (
    <li {...boxProps}>
      <Pic
        name={name}
        {...passedProps}
        {...rest}
      />
      {isHover && (
        <FadeV
          isFixed={false}
          direction="to top"
          darkEdgeColor="var(--dark-02)"
          lightEdgeColor="var(--light-02)"
        />
      )}

      {isVideoMode &&
        videoOrder > -1 && (
          <ActiveBackground
            classValue="row-start"
            style={BORDER_GRADIENT}
          >
            <h4
              className="text-5xl pl-4 font-mono"
              style={TEXT_GRADIENT}
            >
              #{videoOrder + 1}
            </h4>
          </ActiveBackground>
        )}
      {isHover && isVideoMode && (
        <ActiveBackground
          classValue="center cursor-pointer"
          style={BORDER_GRADIENT}
        >
          <motion.h4
            className="absolute left-1/2 top-1/2 text-11xl font-mono"
            style={{
              x: "-50%",
              y: "-50%",
              ...TEXT_GRADIENT,
            }}
            initial={false}
            animate={{
              rotate:
                videoOrder === -1
                  ? 0
                  : 45,
            }}
          >
            +
          </motion.h4>
        </ActiveBackground>
      )}
    </li>
  );
};

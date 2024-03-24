import { FC } from "react";
import { TResolveConfigFromSize } from "@components/pics/pic/resolveDimensionsFromSize";
import { useImage } from "@components/pics/useImage";
import { TPassedProps } from "@components/pics/item/pic/config/types";
import { ActiveBackground } from "@shell/header/right/active-background";
import { Tip } from "@components/pics/item/Tip";
import { I } from "@brysonandrew/icons-i";
import {
  CROSS_ICON,
  PLUS_ICON,
} from "@brysonandrew/icons-keys";
import { FadeV } from "@brysonandrew/fade";
import { Pic } from "@components/pics/item/pic";
import {
  BORDER_GRADIENT,
  GRADIENT_BLUE_PINK_YELLOW,
} from "@constants/css";

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
          <>
            <ActiveBackground classValue="center opacity-40">
              <h4
                className="text-11xl font-mono text-gray"
                style={{
                  background:
                    GRADIENT_BLUE_PINK_YELLOW,
                  backgroundSize:
                    "100% 100%",
                  WebkitBackgroundClip:
                    "text",
                  WebkitTextStroke:
                    "8px transparent",
                }}
              >
                {videoOrder + 1}
              </h4>
            </ActiveBackground>
            {isHover && (
              <Tip>
                <I
                  classValue="text-red"
                  icon={CROSS_ICON}
                />
                <u>Remove</u> from video
                sequence
              </Tip>
            )}
          </>
        )}
      {isHover && isVideoMode && (
        <>
          <ActiveBackground
            style={BORDER_GRADIENT}
          />
          {videoOrder === -1 && (
            <Tip>
              <I
                classValue="text-green"
                icon={PLUS_ICON}
              />
              <u>Add</u> to video
              sequence
            </Tip>
          )}
        </>
      )}
    </li>
  );
};

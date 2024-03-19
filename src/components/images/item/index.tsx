import { FC } from "react";
import { TResolveConfigFromSize } from "@components/images/image/resolveDimensionsFromSize";
import { useImage } from "@components/images/useImage";
import { TPassedProps } from "@components/images/item/image/config/types";
import { ActiveBackground } from "@shell/header/right/active-background";
import { Tip } from "@components/images/item/Tip";
import { I } from "@brysonandrew/icons-i";
import {
  CROSS_ICON,
  PLUS_ICON,
} from "@brysonandrew/icons-keys";
import { FadeFill } from "@brysonandrew/fade";
import { Image } from "./image";

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
      <Image
        name={name}
        {...passedProps}
        {...rest}
      />
      {isHover && (
        <FadeFill direction="to top" classValue="opacity-50" />
      )}
      {videoOrder > -1 && (
        <>
          <ActiveBackground classValue="center border-2 opacity-40">
            <h4 className="text-11xl font-mono text-indigo">
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
          <ActiveBackground classValue="border-3" />
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

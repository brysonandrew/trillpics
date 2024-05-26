import { FC } from "react";
import { motion } from "framer-motion";
import { TClassValueProps } from "@brysonandrew/config-types";
import clsx from "clsx";
import { boxRadius } from "~/constants/box/radius";
import { isNull } from "~/utils/validation/is/null";
import { useTitleObserver } from "~/pics/header/use-title-observer";
import { SubtitleText } from "~/pics/header/subtitle/text";

type TProps = TClassValueProps;
export const HeaderSubtitle: FC<
  TProps
> = ({ classValue }) => {
  const title = useTitleObserver();
  if (isNull(title)) return null;
  return (
    <motion.div
      key="header-right"
      className={clsx(
        "relative h-0 -top-2.5",
        classValue
      )}
    >
      <div
        className="absolute -inset-x-2 inset-0 opacity-100"
        style={{
          borderRadius: boxRadius(),
        }}
      />

      <SubtitleText>
        {title.replace(
          "Trill Pics | ",
          ""
        )}
      </SubtitleText>
    </motion.div>
  );
};

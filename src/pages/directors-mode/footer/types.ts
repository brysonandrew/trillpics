import { FC } from "react";
import { LayoutProps } from "framer-motion";
import { TAnimationProps } from "@brysonandrew/motion-config-types";
import { TPillBProps } from "~/components/buttons/pill/b";

export type TDirectorsModeFooterProps =
  TAnimationProps &
    LayoutProps &
    Partial<
      Pick<TPillBProps, "title">
    > & {
      Button?: FC<TPillBProps>;
    };

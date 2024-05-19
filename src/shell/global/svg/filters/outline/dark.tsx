import { FC } from "react";
import {
  OutlineFilter,
  TOutlineFilterProps,
} from "~/shell/global/svg/filters/outline";
import { OUTLINE_DARK_FILTER_ID } from "~uno/rules/filters/outline";

type TProps = TOutlineFilterProps;
export const OutlineDarkFilter: FC<
  TProps
> = ({
  id = OUTLINE_DARK_FILTER_ID,
  color = "#757575",
  mRadius =0.28,
}) => (
  <OutlineFilter
    mRadius={mRadius}
    color={color}
    id={id}
  />
);

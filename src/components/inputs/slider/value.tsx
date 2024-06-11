import { type FC } from "react";
import { TPillProps } from "~/components/layout/pill";
import { MusicLayout } from "~/pages/video/music/layout";

type TProps = TPillProps;
export const UiInputsSliderValue: FC<
  TProps
> = ({ children }) => {
  return (
    <MusicLayout classValue='text-sm'>
      {children}
    </MusicLayout>
  );
};

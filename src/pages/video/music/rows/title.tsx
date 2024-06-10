import type { FC } from "react";
import {
  TButtonProps,
  TPropsWithChildren,
} from "@brysonandrew/config-types";
import { IconsPlay } from "~/components/icons/playback/play";
import { MusicRowsLayout } from "~/pages/video/music/rows/layout";

type TProps = TPropsWithChildren<
  Partial<TButtonProps>
>;
export const MusicRowsTitle: FC<
  TProps
> = ({ children, ...props }) => {
  return (
    <button
      title={`play ${children}`}
      {...props}
    >
      <MusicRowsLayout>
        <IconsPlay
          classValue="-top-0.25 -left-0.25"
          size={18}
        />
        <h4>{children}</h4>
      </MusicRowsLayout>
    </button>
  );
};

import {
  FC,
  PropsWithChildren,
} from "react";
import { TButtonProps } from "@brysonandrew/config-types";
import { Background } from "~/components/remotion/player/overlays/background";
import { Button } from "~/components/remotion/player/overlays/button";
import { OVERLAYS_POSTER_PROPS } from "~/components/remotion/player/overlays/use-poster";

type TProps = PropsWithChildren<{
  button?: TButtonProps & { Icon: FC };
}>;
export const OverlaysContent: FC<
  TProps
> = (props = OVERLAYS_POSTER_PROPS) => {
  return (
    <div className="column-center p-2 md:p-8">
      <Background />
      <h4 className="relative text-4xl">
        {props.children}
      </h4>
      <div className="h-2" />
      {props.button && (
        <Button
          title={props?.button.title}
          Icon={props.button.Icon}
        >
          {" "}
          {props.button.children}
        </Button>
      )}
    </div>
  );
};

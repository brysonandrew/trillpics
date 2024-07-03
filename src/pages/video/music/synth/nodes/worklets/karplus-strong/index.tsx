import { Fragment } from "react";
import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesKarplusStrongNumbers } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";
import { TKarplusStrongOptionsKey } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/types";

export const NodesKarplusStrong = (props:TUpdateNodeHandlerProps<TKarplusStrongOptionsKey>) => {
  return (
    <NodesTemplate
      title="string"
      Input={Fragment}
    >
      <NodesKarplusStrongNumbers
        {...props}
      />
    </NodesTemplate>
  );
};

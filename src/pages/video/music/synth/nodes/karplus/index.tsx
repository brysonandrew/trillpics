import { TUpdateNodeHandlerProps } from "~/components/inputs/slider/types";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesKarplusStrongNumbers } from "~/pages/video/music/synth/nodes/karplus/numbers";
import { TKarplusStrongOptionsKey } from "~/pages/video/music/synth/nodes/karplus/types";
import { Boundary } from "@brysonandrew/boundary";

export const NodesKarplusStrong = (
  props: TUpdateNodeHandlerProps<TKarplusStrongOptionsKey>
) => {
  return (
      <NodesTemplate title="string">
        <NodesKarplusStrongNumbers
          {...props}
        />
      </NodesTemplate>
  );
};

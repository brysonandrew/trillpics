import { FC, Fragment } from "react";
import { NodesTemplate } from "~/pages/video/music/synth/nodes/template";
import { NodesKarplusStrongNumbers } from "~/pages/video/music/synth/nodes/worklets/karplus-strong/numbers";

export const NodesKarplusStrong: FC<{
  title: JSX.Element;
}> = ({ title }) => {
  return (
    <NodesTemplate
      title={title}
      Input={Fragment}
    >
      <NodesKarplusStrongNumbers />
    </NodesTemplate>
  );
};

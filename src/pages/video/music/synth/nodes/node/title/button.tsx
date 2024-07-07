import { TSynthNodeTitleFc } from "~/pages/video/music/synth/nodes/node/title/types";
import { SynthNodeTitle } from "~/pages/video/music/synth/nodes/node/title";

type TProps = {
  onClick(): void;
};
export const SynthNodeTitleButton: TSynthNodeTitleFc<
  TProps
> = ({
  onClick,
  node: { ...source },
}) => {
  return (
    <button onClick={onClick}>
      <SynthNodeTitle node={source} />
    </button>
  );
};

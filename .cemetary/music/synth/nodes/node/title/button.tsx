import { TSynthNodeTitleFc } from "~/pages/video/music/synth/nodes/node/title/types";
import { SynthNodeTitle } from "~/pages/video/music/synth/nodes/node/title/text";

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
    <motion.button
    {...props}

    onClick={onClick}>
      <SynthNodeTitle node={source} />
    </motion.button>
  );
};

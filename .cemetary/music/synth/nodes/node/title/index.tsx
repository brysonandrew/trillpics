import { motion } from "framer-motion";
import { resolveSquare } from "@brysonandrew/measure";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { box } from "~uno/rules/box";
import { TSynthNodeTitleFc } from "~/pages/video/music/synth/nodes/node/title/types";
import { SynthNodeTitleText } from "~/pages/video/music/synth/nodes/node/title/text";

export const SynthNodeTitle: TSynthNodeTitleFc =
  ({ node, ...props }) => {
    return (
      <motion.div {...props}>
        <SynthNodeTitleText
          node={node}
        />
      </motion.div>
    );
  };

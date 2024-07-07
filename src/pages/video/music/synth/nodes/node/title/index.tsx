import { resolveSquare } from "@brysonandrew/measure";
import { TypographyXxxs } from "~/components/layout/typography/xxxs";
import { box } from "~uno/rules/box";
import { TSynthNodeTitleFc } from "~/pages/video/music/synth/nodes/node/title/types";

export const SynthNodeTitle: TSynthNodeTitleFc =
  ({ node: { Icon, title } }) => {
    return (
      <>
        <TypographyXxxs>
          {title}
        </TypographyXxxs>
        <Icon
          {...resolveSquare(box._05)}
        />
      </>
    );
  };

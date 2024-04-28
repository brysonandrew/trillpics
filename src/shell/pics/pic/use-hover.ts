import { useHoverPicKey } from "~/hooks/use-pic-hover-key";
import { TPicProps } from "~/shell/pics/pic";

export const useHover = (
  props: TPicProps
) => {
  const propsKey =
    JSON.stringify(props);
  const { hoverKey, handlers } =
    useHoverPicKey(propsKey);
  const isHovering =
    hoverKey === propsKey;
  return { isHovering, handlers };
};
export type TPicHoverResult =
  ReturnType<typeof useHover>;

import { FC } from "react";
import clsx from "clsx";
import { TPicProps } from "~/shell/pics/pic";
import {
  TUseBox,
  useBox,
} from "~/shell/pics/pic/box/use-box";
type TProps = TPicProps & {
  cursor: "pointer" | "zoom-in";
  children(props: TUseBox): JSX.Element;
};
export const Box: FC<TProps> = ({
  children,
  cursor,
  ...props
}) => {
  const box = useBox(props);
  return (
    <div
      style={{
        position: "relative",
        ...box.cellDimensions,
        cursor,
      }}
      {...box.handlers}
    >
      {children(box)}
    </div>
  );
};

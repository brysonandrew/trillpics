import { FC } from "react";
import clsx from "clsx";
import { TPicProps } from "~/shell/pics/pic";
import { useVideoStore } from "~/store";
import { useBox } from "~/shell/pics/pic/box/use-box";

type TProps = TPicProps & {
  children(props: TUseBox): JSX.Element;
};
export const Box: FC<TProps> = ({
  children,
  ...props
}) => {

  const box = useBox(props);
  return (
    <div
      className={clsx(
        "relative cursor-pointer"
      )}
      style={{
        ...box.cellDimensions,
        cursor: box.isDirectorsMode
          ? "pointer"
          : "zoom-in",
      }}
  
      {...box.handlers}
    >
      {children(box)}
    </div>
  );
};
export type TUseBox = ReturnType<
  typeof useBox
>;

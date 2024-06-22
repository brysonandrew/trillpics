import type { FC } from "react";
import { TDivProps } from "@brysonandrew/config-types";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";
import { PicDisplay } from "~/pics/grid/pic/display";

type TProps = Pick<
  TUsePicSelected,
  "names"
> &
  TDivProps & { title?: string };
export const ShowPics: FC<TProps> = ({
  title,
  names,
  style,
  ...props
}) => {
  const { screen } = useReadyContext();

  const container = screen.container;
  const unitSize =
    container.width / MAX_COUNT;
  const s = boxSize();

  return (
    <>
      {title && (
        <>
          <p>{title}</p>
          <div className="h-6" />
        </>
      )}
      <div
        className="relative grid gap-2 pointer-events-none"
        style={{
          display: "grid",
          left: 0,
          width: container.width,
          gap: s.m,
          gridTemplateColumns: `repeat(auto-fill, minmax(${unitSize}px, 1fr))`,
          ...style,
        }}
        {...props}
      >
        {names.map((name) => (
          <PicDisplay
            key={`shown-pic-${name}`}
            name={name}
            width={unitSize}
            height={unitSize}
          />
        ))}
      </div>
    </>
  );
};

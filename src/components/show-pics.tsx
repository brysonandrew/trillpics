import type { FC } from "react";
import { motion } from "framer-motion";
import { TUlProps } from "@brysonandrew/config-types";
import { container } from "tailwindcss/defaultTheme";
import { TUsePicSelected } from "~/hooks/pic/selected";
import { resolvePicSrc } from "~/utils/src";
import { MAX_COUNT } from "~/pages/video/_root/reorder/constants";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";

type TProps = Pick<
  TUsePicSelected,
  "names"
> &
  TUlProps & { title?: string };
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
      <ul
        className="relative grid gap-2"
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
          <li key={name}>
            <motion.img
              layoutId={name}
              alt={name}
              src={resolvePicSrc({
                base: "remotion",
                name,
              })}
              width={unitSize}
              height={unitSize}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

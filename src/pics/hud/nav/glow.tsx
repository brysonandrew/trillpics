import type { FC } from "react";
import { resolveGradient } from "@brysonandrew/color-gradient";
import clsx from "clsx";
import { useReadyContext } from "~/shell/ready/context";
import { boxSize } from "~uno/rules/box/size";
import { GLASS_ID_1_PROPS } from "~/shell/init/svg/filters/_filters-pismo/Glass";

export const NavItemGlow: FC = () => {
  const { container } =
    useReadyContext();
  const s = boxSize();
  return (
    <div
      className={clsx(
        "absolute -inset-x-2 inset-y-2 w-full"
      )}
      style={{
        height: s.m025,
        width: container.width / 2,
        left:
          -container.width / 4 + s.m,
        top: s.m05,
        // filter: "blur(4px)",
        backgroundImage: `${resolveGradient(
          {
            name: "radial-gradient",
            parts: [
              "ellipse at top",
              "gray",
              "transparent",
            ],
          },
        )},
      
          ${resolveGradient({
            name: "radial-gradient",
            parts: [
              "ellipse at bottom",
              "gray",
              "transparent",
            ],
          })}`,
          ...GLASS_ID_1_PROPS

      }}
    />
  );
};

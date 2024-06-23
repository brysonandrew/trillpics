import type { FC } from "react";
import { resolveGradient } from "@brysonandrew/color-gradient";
import { PicsHudFooterNav } from "~/pics/hud/nav";
import { box } from "~uno/rules/box";
import { useContextReady } from "~/shell/ready/context";

export const HudFooter: FC = () => {
  const { screen } = useContextReady();
  
  return (
    <>
      <footer
        className="fixed w-full z-20 h-0"
        style={{
          left: screen.container.left,
          width: screen.container.width,
          top: box.m2,
        }}
      >
        {!screen.isResizing && (
          <>
            <div
              className="absolute left-0 right-0 w-full z-20  pointer-events-none"
              style={{
                height: box.m4,
                top:
                  screen.container
                    .height - box.m,
                backgroundImage:
                  resolveGradient({
                    name: "linear-gradient",
                    parts: [
                      "transparent",
                      "var(--gray-5)",
                    ],
                  }),
              }}
            />
            <PicsHudFooterNav
              key="PicsHudFooterNav"
              container={
                screen.container
              }
            />
          </>
        )}
      </footer>
    </>
  );
};

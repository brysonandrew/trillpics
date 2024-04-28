import type { FC } from "react";
import { LightingGlow } from "~/components/decoration/lighting/glow";
import { resolvePresence } from "~/utils/animation";

const COUNT = 4;

type TProps = { isLoading: boolean };
export const Flares: FC<TProps> = ({
  isLoading,
}) => {
  return (
    <>
      {[...Array(COUNT)].map(
        (_, index) => (
          <LightingGlow
            key={`LightingGlow${index}`}
            transition={{
              repeat: Infinity,
              repeatDelay: 0.2,
            }}
            {...resolvePresence(
              {
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              },
              {
                scale: isLoading
                  ? [
                      0.4 +
                        0.4 *
                          Math.random(),
                      0.4 +
                        0.4 *
                          Math.random(),
                    ]
                  : 0.4 +
                    0.4 * Math.random(),
                opacity: isLoading
                  ? [
                      0.4 +
                        0.2 *
                          Math.random(),
                      0.4 +
                        0.2 *
                          Math.random(),
                    ]
                  : 0.4 +
                    0.2 * Math.random(),
                x: isLoading
                  ? [
                      Math.sin(
                        (index /
                          COUNT) *
                          Math.PI *
                          2
                      ) *
                        (40 +
                          Math.random() *
                            20),
                      Math.sin(
                        (index /
                          COUNT) *
                          Math.PI *
                          2
                      ) *
                        -(
                          40 +
                          Math.random() *
                            20
                        ),
                    ]
                  : Math.sin(
                      (index / COUNT) *
                        Math.PI *
                        2
                    ) *
                    -(
                      40 +
                      Math.random() * 20
                    ),
                y: isLoading
                  ? [
                      Math.cos(
                        (index / 11) *
                          Math.PI *
                          2
                      ) *
                        (40 +
                          Math.random() *
                            20),
                      Math.cos(
                        (index / 11) *
                          Math.PI *
                          2
                      ) *
                        -(
                          40 +
                          Math.random() *
                            20
                        ),
                    ]
                  : Math.cos(
                      (index / 11) *
                        Math.PI *
                        2
                    ) *
                    -(
                      40 +
                      Math.random() * 20
                    ),
              }
            )}
          />
        )
      )}
    </>
  );
};

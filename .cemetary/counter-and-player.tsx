import type { FC } from "react";

export const CounterAndPlayer: FC = () => {
  return (
    <div>
      {/* <motion.div
          className="absolute row-space"
          style={{
            height: 0,
            width:
              container.width + s.m,
            bottom: s.m4,
            x: dragger.x05,
            left: 0,
            right: 0,
            y: dragger.y,
          }}
        >
          {isVideoPics ? (
            <div
              className="relative row h-0"
              style={{
                top: s.m025,
                gap: s.m05,
                width: s.m4,
              }}
            >
              <motion.div
                className="relative h-px _gradient-radial"
                style={{
                  left: s.m05,
                  bottom: s.m05,
                  width: s.m15,
                  rotate: -35,
                }}
              />
              <VideoPicsCounter
                classValue="relative pointer-events-none"
                style={{
                  left: -s.m075,
                  bottom: s.m,
                }}
              >
                {(count) => (
                  <>{`${count} Pics`}</>
                )}
              </VideoPicsCounter>
            </div>
          ) : (
            <div />
          )}
          <div
            className="relative row h-0"
            style={{
              left: 0,
              top: 0,
              gap: s.m05,
              width: s.m4,
            }}
          >
            <Pill
              classValue="relative pointer-events-none"
              style={{
                height: s.m05,
                left: s.m,
                bottom: s.m05,
              }}
            >
              <SubtitleText>
                watch
              </SubtitleText>
            </Pill>
            <motion.div
              className="absolute h-px _gradient-radial"
              style={{
                right: s.m05,
                bottom: 0,
                width: s.m15,
                rotate: 35,
              }}
            />

            <div className="absolute right-0 h-0 column-end w-0">
              <ControlsPlayer />
            </div>
          </div>
        </motion.div> */}
    </div>
  );
};
import {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { box } from "~uno/rules/box";
import { ModulatorsButton } from "~/pages/video/music/synth/nodes/modulators/button";
import { useIds } from "~/pages/video/music/synth/nodes/modulators/ids";
import { ModulatorsInputs } from "~/pages/video/music/synth/nodes/modulators/inputs";
import { LinesVertical } from "~/components/lines/vertical";

type TProps = PropsWithChildren<{
  id: string;
  audioParam: AudioParam | null;
}>;
export const Modulators: FC<TProps> = ({
  children,
  ...props
}) => {
  const [isConnected, setConnected] =
    useState(false);
  const { id, audioParam } = props;
  const IDS = useIds(id);
  const {
    audio: { modulator },
  } = useMusicRefs();

  const curr =
    modulator.refs[id]?.isStarted;
  const isStarted = Boolean(curr);

  const isAudioParamNull =
    audioParam === null;

  useEffect(() => {
    if (
      !modulator.refs[id] &&
      audioParam
    ) {
      modulator.refs[id] =
        modulator.connect(
          audioParam,
          id
        );
      setConnected(true);
    }
  }, [isAudioParamNull]);

  return (
    <div
      id={IDS.root}
      className="relative row-start"
      style={{
        gap: box.m00625,

        padding: box.m00625,
      }}
    >
      <div
        className="column-space absolute right-full"
        style={{
          // width: box.m05,
          transform: `translateX(${-box.m003125}px)`,
          top: box.m0125,
        }}
      >
        <ModulatorsButton
          ids={IDS}
          {...props}
        />
        <LinesVertical
          positionClass="absolute"
          colorClass="_bi-border"
          // onClick={handleClick}
          style={{
            top: box.m0375,
            left: box.m00625,
            height: box.m,
            borderWidth: 1,
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        />
      </div>
      {children}

      {isConnected && (
        <ModulatorsInputs
          ids={IDS}
          style={{
            display: isStarted
              ? "flex"
              : "none",
          }}
          {...props}
        />
      )}
    </div>
  );
};

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
      className="relative"
      style={{
        paddingRight: box.m0125,
      }}
    >
      <div
        className="column-space absolute right-full"
        style={{
          width: box.m05,
          transform: `translateX(${box.m0125}px)`,
          top: box.m0125,
        }}
      >
        <ModulatorsButton
          ids={IDS}
          {...props}
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

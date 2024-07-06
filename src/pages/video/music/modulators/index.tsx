import {
  FC,
  PropsWithChildren,
  useEffect,
  useState,
} from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { box } from "~uno/rules/box";
import { ModulatorsButton } from "~/pages/video/music/modulators/button";
import { useIds } from "~/pages/video/music/modulators/ids";
import { ModulatorsInputs } from "~/pages/video/music/modulators/inputs";
import { LinesVertical } from "~/components/lines/vertical";

type TProps = PropsWithChildren<{
  id: string;
  audioParam?: AudioParam;
}>;
export const Modulators: FC<TProps> = ({
  children,
  ...props
}) => {
  const [isConnected, setConnected] =
    useState(false);
  const { id, audioParam } = props;
  const IDS = useIds(id);
  const context = useMusicRefs();
  //  useEffect(() => {
  // if (
  //   !modulators.refs[id] &&
  //   audioParam
  // ) {
  //   modulators.refs[id] =
  //     modulators.connect(
  //       audioParam,
  //       id
  //     );
  //     setConnected(true);
  //   }
  // }, []);
  const {
    audio: { modulators },
  } = context;

  const curr =
    modulators.refs[id]?.isStarted;
  const isStarted = Boolean(curr);

  const isAudioParamNull =
    audioParam === null;

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
          style={{
            top: box.m0375,
            left: 2,
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

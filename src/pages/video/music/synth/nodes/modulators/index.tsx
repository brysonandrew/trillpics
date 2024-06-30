import {
  FC,
  PropsWithChildren,
  useEffect,
  useMemo,
  useState,
} from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { box } from "~uno/rules/box";
import { OffSwitch } from "~/components/icons/_pismo/OffSwitch";
import { ModulatorsNumbers } from "~/pages/video/music/synth/nodes/modulators/numbers";
import { IconsPlus14 } from "~/components/icons/plus/14";
import { resolveCompositeKey } from "@brysonandrew/utils-key";
import {
  imperativeBiConic,
  imperativeBiNone,
  imperativeHide,
  imperativeShow,
} from "~/pages/video/music/synth/nodes/modulators/imperative";
import { LinesVertical } from "~/components/lines/vertical";

type TProps = PropsWithChildren<{
  id: string;
  audioParam: AudioParam;
}>;
export const Modulators: FC<TProps> = ({
  children,
  ...props
}) => {
  const [isConnected, setConnected] =
    useState(false);
  const { id, audioParam } = props;

  const {
    audio: { modulator, context },
  } = useMusicRefs();

  const IDS = useMemo(() => {
    return {
      root: resolveCompositeKey(
        "root",
        id
      ),
      button: resolveCompositeKey(
        "button",
        id
      ),
      started: {
        icon: resolveCompositeKey(
          "started",
          "icon",
          id
        ),
        inputs: resolveCompositeKey(
          "started",
          "inputs",
          id
        ),
      },
      disconnected: {
        icon: resolveCompositeKey(
          "disconnected",
          "icon",
          id
        ),
      },
    } as const;
  }, [id]);

  const curr =
    modulator.refs[id]?.isStarted;
  const isStarted = Boolean(curr);

  const handleStart = () => {
    const modulatorRef =
      modulator.refs[id];
    modulatorRef.oscillator.start(
      context.currentTime
    );
    modulator.refs[id].isStarted = true;

    imperativeBiConic(IDS.root);
    imperativeShow(IDS.started.icon);
    imperativeShow(IDS.started.inputs);

    imperativeHide(
      IDS.disconnected.icon
    );
  };
  const handleStop = () => {
    if (modulator.refs[id]) {
      modulator.refs[id] = {
        ...modulator.refs[id],
        ...modulator.refs[id].reconnect(
          audioParam
        ),
      };
      modulator.refs[id].isStarted =
        false;
    }

    imperativeBiNone(IDS.root);

    imperativeShow(
      IDS.disconnected.icon
    );

    imperativeHide(IDS.started.icon);
    imperativeHide(IDS.started.inputs);
  };

  const handleClick = () => {
    const isStarted =
      modulator.refs[id].isStarted;
    if (isStarted) {
      handleStop();
    } else {
      handleStart();
    }
  };

  useEffect(() => {
    if (!modulator.refs[id]) {
      modulator.refs[id] =
        modulator.connect(audioParam,id);
      setConnected(true);
    }
  }, []);

  return (
    <div
      id={IDS.root}
      className="relative"
      style={{
        // ...box.p(box.m0125),
        paddingRight: box.m0125,
        // gap: box.m0125,
        // display: isStarted
        //   ? "flex"
        //   : "none",
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
        <button
          id={IDS.button}
          className="relative center bg-black"
          title="connect"
          style={{
            ...resolveSquare(box.m025),
            ...box.r.xl,
          }}
          onClick={handleClick}
        >
          <div
            className="fill _bi-conic-metal opacity-50"
            style={{
              ...resolveSquare(
                box.m025
              ),
              ...box.r.xl,
            }}
          />
          <OffSwitch
            id={IDS.started.icon}
            style={{
              display: isStarted
                ? "flex"
                : "none",
            }}
          />
          <IconsPlus14
            id={IDS.disconnected.icon}
            style={{
              display: isStarted
                ? "none"
                : "flex",
            }}
          />
        </button>
      </div>
      {children}
      <div
        id={IDS.started.inputs}
        className="relative w-full column-stretch"
        style={{
          // ...box.p(box.m0125),
          // marginBottom: box.m0125,
          // paddingBottom: box.m025,

          gap: box.m0125,
          display: isStarted
            ? "flex"
            : "none",
        }}
      >
        {isConnected && (
          <ModulatorsNumbers
            {...props}
          />
        )}
        <LinesVertical
          positionClass="absolute"
          colorClass="border-white _bi-border"
          onClick={handleClick}
          style={{
            top: -box.m01875,
            left: -box.m01875,
            pointerEvents: "auto",
            cursor: "pointer",
          }}
        />
      </div>
    </div>
  );
};

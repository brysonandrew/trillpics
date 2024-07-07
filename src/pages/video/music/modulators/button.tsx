import {
  FC,
  PropsWithChildren,
} from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { box } from "~uno/rules/box";
import { OffSwitch } from "~/components/icons/_pismo/OffSwitch";
import { IconsPlus14 } from "~/components/icons/plus/14";
import {
  imperativeBiZebra,
  imperativeBiNone,
  imperativeHide,
  imperativeShow,
} from "~/utils/imperative";
import { TUseIdsResult } from "~/pages/video/music/modulators/ids";

type TProps = PropsWithChildren<{
  id: string;
  ids: TUseIdsResult;
  audioParam?: AudioParam;
}>;
export const ModulatorsButton: FC<
  TProps
> = ({ children, ...props }) => {
  const { id, ids, audioParam } = props;

  const {
    audio: { modulators, context },
  } = useMusicRefs();

  const curr =
    modulators.refs[id]?.isStarted;
  const isStarted = Boolean(curr);

  const handleStart = () => {
    const modulatorRef =
      modulators.refs[id];
    modulatorRef.oscillator.start(
      context.currentTime
    );
    modulators.refs[id].isStarted =
      true;

    imperativeBiZebra(ids.root);
    imperativeShow(ids.started.icon);
    imperativeShow(ids.started.inputs);

    imperativeHide(
      ids.disconnected.icon
    );
  };
  const handleStop = () => {
    if (
      modulators.refs[id] &&
      audioParam
    ) {
      modulators.refs[id] = {
        ...modulators.refs[id],
        ...modulators.refs[
          id
        ].reconnect(audioParam),
      };
      modulators.refs[id].isStarted =
        false;
    }
    imperativeBiNone(ids.root);
    imperativeShow(
      ids.disconnected.icon
    );
    imperativeHide(ids.started.icon);
    imperativeHide(ids.started.inputs);
  };

  const handleClick = () => {
    console.log(id);
    const isStarted =
      modulators.refs[id].isStarted;
    if (isStarted) {
      handleStop();
    } else {
      handleStart();
    }
  };

  return (
    <button
      id={ids.button}
      className="relative row-space bg-black-2"
      title="connect"
      style={{
        height: box._025,
        width: box._2+ box._0125,
        paddingRight: box._025,
        ...box.r.xl,
      }}
      onClick={() => handleClick()}
    >
      <div
        className="absolute left-0 top-0 _bi-conic-metal opacity-50"
        style={{
          ...resolveSquare(box._025),
          ...box.r.xl,
        }}
      />
      <OffSwitch
        id={ids.started.icon}
        style={{
          display: isStarted
            ? "flex"
            : "none",
        }}
      />
      <IconsPlus14
        classValue="-ml-0.5"
        id={ids.disconnected.icon}
        style={{
          display: isStarted
            ? "none"
            : "flex",
        }}
      />
      {children}
    </button>
  );
};

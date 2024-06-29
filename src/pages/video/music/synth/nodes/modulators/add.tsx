import type { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { IconsPlus14 } from "~/components/icons/plus/14";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { box } from "~uno/rules/box";
import { OffSwitch } from "~/components/icons/_pismo/OffSwitch";
import { Ordered } from "~/components/icons/_pismo/Ordered";
const id = Math.random()
  .toString()
  .replace(".", "");
type TProps = {
  audioParam: AudioParam;
};
export const ModulatorsAdd: FC<
  TProps
> = ({ audioParam }) => {
  const {
    audio: { modulator },
  } = useMusicRefs();
  const handleConnect = () => {
    const r = modulator.connect(
      audioParam,
      { gain: 100 }
    );
    console.log(r);
    modulator.refs[id] = r;
    console.log(modulator);
  };
  const handleDisconnect = () => {
    console.log(modulator.refs[id]);
    modulator.refs[id].disconnect();
  };
  const handleReconnect = () => {
    console.log(modulator.refs[id]);
    modulator.refs[id].reconnect(
      audioParam
    );
  };
  console.log(modulator);
  return (
    <div
      className="column-space absolute right-full top-1/2 bg-red"
      style={{
        width: box.m05,
        height: box.m2,
      }}
    >
      <button
        className="center _bi-conic-metal"
        title="connect"
        onClick={handleConnect}
        style={{
          ...resolveSquare(box.m05),
        }}
      >
        <IconsPlus14 />
      </button>
      <button
        className="center _bi-conic"
        title="reconnect"
        onClick={handleReconnect}
        style={{
          ...resolveSquare(box.m05),
        }}
      >
        <OffSwitch />
      </button>
      <button
        className="center _bi-conic"
        title="disconnect"
        onClick={handleDisconnect}
        style={{
          ...resolveSquare(box.m05),
        }}
      >
        <Ordered />
      </button>
    </div>
  );
};

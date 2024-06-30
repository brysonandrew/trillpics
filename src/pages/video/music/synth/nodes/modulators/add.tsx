import type { FC } from "react";
import { resolveSquare } from "@brysonandrew/measure";
import { IconsPlus14 } from "~/components/icons/plus/14";
import { useMusicRefs } from "~/pages/video/music/_context/init";
import { box } from "~uno/rules/box";
import { OffSwitch } from "~/components/icons/_pismo/OffSwitch";
import { Ordered } from "~/components/icons/_pismo/Ordered";
// const id = Math.random()
//   .toString()
//   .replace(".", "");
type TProps = {
  id: string;
  audioParam: AudioParam;
};
export const ModulatorsAdd: FC<
  TProps
> = ({ id, audioParam }) => {
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
      className="column-space absolute right-full bottom-1/2"
      style={{
        width: box.m05,
        transform: `translateX(${box.m0125}px)`,
      }}
    >
      <button
        className="relative center bg-black"
        title="connect"
        onClick={handleConnect}
        style={{
          ...resolveSquare(box.m025),
          ...box.r.xl,
        }}
      >
        <div
          className="fill _bi-conic-metal opacity-50"
          style={{
            ...resolveSquare(box.m025),
            ...box.r.xl,
          }}
        />
        <IconsPlus14 />
      </button>
      {/* <button
        className="center _bi-conic brightness-40"
     
              title="disconnect"
        onClick={handleDisconnect}
        style={{
          ...resolveSquare(box.m07),
        }}
      >
        <OffSwitch />
      </button> */}
      {/* <button
        className="center _bi-conic brightness-40"
     title="reconnect"
        onClick={handleReconnect}
        style={{
          ...resolveSquare(box.m07),
        }}
      >
        <Ordered />
      </button> */}
    </div>
  );
};

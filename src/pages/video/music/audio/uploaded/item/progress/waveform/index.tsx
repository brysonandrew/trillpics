import {
  PointerEventHandler,
  type FC,
} from "react";
import { box } from "~uno/rules/box";

export type TAudioUploadedItemWaveformProps =
  {
    progress: number;
    onSeek(progress: number): void;
  };
export const AudioUploadedItemWaveform: FC<
  TAudioUploadedItemWaveformProps
> = ({ progress, onSeek }) => {
  const handleSeekWithinTarget: PointerEventHandler<
    HTMLDivElement
  > = (event) => {
    const { left, width } =
      event.currentTarget.getBoundingClientRect();
    const pageX = event.pageX;
    const fraction =
      (pageX - left) / width;
    onSeek(fraction);
  };
  return (
    <div
      className="relative flex grow w-full overflow-hidden"
      onPointerDown={
        handleSeekWithinTarget
      }
      onPointerUp={
        handleSeekWithinTarget
      }
    >
      <div
        className="pointer-events-none bg-black-4 border-white-01 border grow"
        style={{ height: box._05, ...box.r.l }}
      />
      <div
        style={{
          width: `${progress * 100}%`,
          height: box._05,
        }}
        className="absolute inset-0 flex flex-row pointer-events-none _bi-radial overflow-hidden"
      />
      <div
        style={{
          width: `${progress * 100}%`,
          height: box._05,
        }}
        className="absolute inset-0 flex flex-row pointer-events-none _bi-mesh overflow-hidden"
      />
    </div>
  );
};

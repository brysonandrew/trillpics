import { useRef } from "react";
import styled from "@emotion/styled";
import { TMultiOptions } from "react-synthwave";
import { useSynthwaveContext } from "~/pages/video/music/synthwave/state/Context";
import { useSoundContext } from "~/shell/global/sound";
import { SynthwaveOptions } from "@app/Options";

const Root = styled.div``;
const Canvas = styled.canvas``;
const Core = styled.div``;

export default () => {
  const { context, master } =
    useSoundContext();
  const {
    isReady,
    isPlaying,
    options,
    multi,
    dispatch,
  } = useSynthwaveContext();
  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );
  const nextOptions = {
    ...multi,
    ...options,
  };
  const currentRef =
    useRef<TMultiOptions>(nextOptions);
  currentRef.current = nextOptions;

  return (
    <div className="fill z-50">
      <Canvas
        ref={canvasRef}
        className="fixed inset-0 w-full h-full"
      />
      <Root className="relative flex flex-col items-stretch px-8">
        <div className="py-6" />
        <Core className="w-core">
          <SynthwaveOptions />
        </Core>
        <div className="py-6" />
      </Root>
    </div>
  );
};

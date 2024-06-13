import { useEffect } from "react";
import { useMusicInitContext } from "~/pages/video/music/_context/init";
import { useRecorderDataAvailableHandler } from "~/pages/video/music/_context/hooks/recorder/data-available";
import { useRecorderSaveHandler } from "~/pages/video/music/_context/hooks/recorder/save";
import { useRecorderStopHandler } from "~/pages/video/music/_context/hooks/recorder/stop";

export const useRecorderListeners =
  () => {
    const { recorder } =
      useMusicInitContext();
    const handleSave =
      useRecorderSaveHandler();
    const handleStop =
      useRecorderStopHandler();
    const handleDataAvailable =
      useRecorderDataAvailableHandler();

    useEffect(() => {
      recorder.onerror = console.log;
      recorder.onstart = (event:Event) => {
        console.log('onstart',event)
      };
      recorder.onstop = (event:Event) => {
        handleStop(event);
        handleSave(event);
      };
      recorder.ondataavailable =
        handleDataAvailable;
    }, []);
  };

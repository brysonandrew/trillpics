import { useEffect } from "react";
import { useMusicRefs } from "~/pages/video/music/_context/refs";
import { useRecorderDataAvailableHandler } from "~/pages/video/music/_context/hooks/recorder/data-available";
import { useRecorderSaveHandler } from "~/pages/video/music/_context/hooks/recorder/save";
import { useRecorderStopHandler } from "~/pages/video/music/_context/hooks/recorder/stop";

export const useRecorderListeners =
  () => {
    const {
      audio: {
        save: { recorder },
      },
    } = useMusicRefs();
    const handleSave =
      useRecorderSaveHandler();
    const handleStop =
      useRecorderStopHandler();
    const handleDataAvailable =
      useRecorderDataAvailableHandler();

    useEffect(() => {
      recorder.onerror = (
        event: Event
      ) => {
        console.log(event);
      };
      recorder.onstart = (
        event: Event
      ) => {
        // console.log("onstart", event);
      };
      recorder.onstop = (
        event: Event
      ) => {
        // console.log("onstop", event);
        handleSave(event);
      };
      recorder.ondataavailable =
        handleDataAvailable;
    }, []);
  };

import { TSoundContext } from "~/shell/global/sound/types";

export const useDownload = () => {
  const handler = (sound: Pick<TSoundContext['sound'], "chunks">) => {
    console.log(sound.chunks)
    const blob = new Blob(sound.chunks, {
      type: "audio/webm",
    });
    const url =
      window?.URL?.createObjectURL?.(
        blob
      );
    if (!url) return null;
    const a =
      document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "test.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window?.URL?.revokeObjectURL?.(
        url
      );
    }, 100);
  };

  return handler;
};

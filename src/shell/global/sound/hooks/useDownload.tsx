import { AUDIO_SRC_KEY } from "~/hooks/pic/constants";
import { useQueryParamsSet } from "~/hooks/query-params";

export const useDownload = () => {
  const queryParams = useQueryParamsSet(
    AUDIO_SRC_KEY
  );

  const handler = (audioBlob: Blob) => {
    if (queryParams.curr) {
      window.URL.revokeObjectURL(
        queryParams.curr
      );
    }
    const url =
      window.URL.createObjectURL(
        audioBlob
      );
    if (!url) {
      console.log("no url");
      return;
    }
    queryParams.set(url);
    const a =
      document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = "test.webm";
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
    }, 100);
  };

  return handler;
};

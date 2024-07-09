export const useDownload = () => {
  // const queryParams = useQueryParamsSet(
  //   AUDIO_SRC_KEY
  // );

  const handler = (url: string) => {
 
    if (!url) {
      console.log("no url");
      return;
    }
    // queryParams.set(url);
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

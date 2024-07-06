type TConfig = any;
export const resolveBlobToUri = (
  config: TConfig
) => {
  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "http://g.etfv.co/http://www.google.com",
    true
  );
  xhr.responseType = "blob";
  xhr.onload =  (e)=> {
    //Stringify blob...
    //reload the icon from storage
    const fr = new FileReader();
    fr.onload = (
      e: ProgressEvent<FileReader>
    ) => {
      if (e.target) {
        localStorage["icon"] =
          e.target.result;
        // document.getElementById(
        //   "myicon"
        // ).src = localStorage["icon"];
      }
    };
    fr.readAsDataURL(xhr.response);
  };
  xhr.send(null);
};
export type TResolveBlobToUriResult =
  ReturnType<typeof resolveBlobToUri>;

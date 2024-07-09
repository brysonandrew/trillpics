export const createSource = (sound:any) => {
  const options: BlobPropertyBag = {
    type: "recording/ogg; codecs=opus",
  };
  const blob = new Blob(
    sound.chunks,
    options
  );
  
  const fileReader = new FileReader();

  fileReader.onloadend = () => {
    const arrayBuffer =
      fileReader.result;
    if (
      arrayBuffer &&
      typeof arrayBuffer !== "string"
    ) {
      sound.arrayBuffer = arrayBuffer;
    }
  };

  fileReader.readAsArrayBuffer(blob);

  sound.chunks = [];
};
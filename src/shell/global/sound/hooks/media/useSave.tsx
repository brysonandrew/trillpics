import { MIME_TYPES } from "~/shell/global/sound/constants";

export const useSave = (
  chunks: Blob[]
) => {
  // const { mimeType, dispatch } = useContext();
  return () => {
    // const type = mimeType.split(";", 1)[0];
    const superBuffer: Blob = new Blob(
      chunks,
      {
        // type,
        type: MIME_TYPES[0],
      }
    );
    const url =
      window?.URL?.createObjectURL?.(
        superBuffer
      ) ?? null;
    if (url) {
      // dispatch({
      //   type: "samples",
      //   value: {
      //     name: Math.random().toString(),
      //     chunks,
      //     url,
      //   },
      // });
    }
  };
};

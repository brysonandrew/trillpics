import { useEffect } from "react";
import { FONTS } from "~app/base";
import FontFaceObserver from "fontfaceobserver";

type TConfig = any;
export const useFonts = (
  config: TConfig
) => {
  useEffect(() => {
    const listen = async () => {
      for await (const {
        name,
      } of FONTS) {
        console.time(name[0]);
        const font =
          new FontFaceObserver(name[0]);
        const result =
          await font.load();
        console.timeEnd(name[0]);
        console.log(result);
      }
    };
    listen();
  }, []);
};

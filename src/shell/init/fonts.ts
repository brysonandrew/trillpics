import { useEffect } from "react";
import FontFaceObserver from "fontfaceobserver";
import { FONTS } from "~app/base/fonts";

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

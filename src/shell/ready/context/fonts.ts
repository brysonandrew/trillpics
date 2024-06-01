import {
  useCallback,
  useEffect,
  useState,
} from "react";
import WebFont from "webfontloader";
import { produce } from "immer";
import { FONT_NAMES } from "~uno/presets/fonts";

export const FAMILIES = FONT_NAMES.map(
  ([name]) => name
);

type TFamilies = typeof FAMILIES;
type TFamily = TFamilies[number];
const URLS = [
  // "/fonts/armstrong3/regular.otf",
  "/fonts/dragon/regular.otf",
  "/fonts/toxigenesis/regular.otf",
] as const;

const LOADER_RECORD = {
  loading: console.log,
  active: console.log,
  inactive: console.log,
  fontloading: console.log,
  fontactive: console.log,
  fontinactive: console.log,
} as const;

type TLoaderRecord =
  typeof LOADER_RECORD;
type TLoaderKey = keyof TLoaderRecord;
type TFamilyEventConfig = Record<
  TLoaderKey,
  boolean
>;
export type TFontsResult = Record<
  TFamily,
  Partial<TFamilyEventConfig>
>;

const INIT = FAMILIES.reduce((a, c) => {
  a[c] = {};
  return a;
}, {} as TFontsResult);

export const useFonts = () => {
  const [record, setRecord] =
    useState<TFontsResult>({ ...INIT });

  const handleEvent = useCallback(
    (
      family: TFamily,
      event: TLoaderKey
    ) => {
      setRecord(
        produce((draft) => {
          draft[family][event] = true;
        })
      );
    },
    []
  );

  useEffect(() => {
    WebFont.load({
      fontloading: (
        family: TFamily,
        styleWeight: "n4" | string
      ) => {
        handleEvent(family, "active");
      },
      fontactive: (
        family: TFamily,
        styleWeight: "n4" | string
      ) => {
        handleEvent(family, "active");
      },
      custom: {
        families: [...FAMILIES],
        urls: [...URLS],
      },
    });
  }, []);

  return record;
};

// const listen = async () => {
//   for await (const {
//     name,
//   } of FONTS) {
//     console.time(name[0]);
//     const font =
//       new FontFaceObserver(name[0]);
//     const result =
//       await font.load();
//     console.timeEnd(name[0]);
//     console.log(result);
//   }
// };
// listen();

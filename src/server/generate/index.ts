import { TPicSeriesProps } from "~/components/remotion/pic-series/types";
import {
  renderMedia,
  selectComposition,
  type RenderMediaOptions,
  type SelectCompositionOptions,
} from "@remotion/renderer";
import { TGenerateOutput } from "~/types/trpc/generate";
import d from "dotenv";
import { SERVE_URL } from "~root/remotion.config";

d.config();

export type TGenerateProps =
  TPicSeriesProps;
export const generate = async (
  inputProps: TGenerateProps
) => {
  const isLocal = (
    import.meta.env ?? process.env
  )._IS_LOCAL;
  const compositionOptions: SelectCompositionOptions =
    {
      serveUrl: SERVE_URL,
      id: "pic-series",
      inputProps: {
        ...inputProps,
        ...(isLocal
          ? {}
          : { base: "remotion" }),
      },
      logLevel: "verbose",
      onBrowserLog:
        inputProps.onLog ?? console.log,
    };

  inputProps?.onLog?.(
    "Selecting composition..."
  );
  const composition =
    await selectComposition(
      compositionOptions
    );
  inputProps?.onLog?.(
    "Selecting composition... DONE"
  );

  const renderMediaOption: RenderMediaOptions =
    {
      composition,
      serveUrl: SERVE_URL,
      codec: "h264",
      onDownload:
        inputProps.onDownload ??
        (console.log as any),
      onProgress:
        inputProps.onProgress ??
        console.log,
      onBrowserLog:
        inputProps.onLog ?? console.log,
      inputProps,
      logLevel: "verbose",
    };
  inputProps?.onLog?.(
    "Rendering media..."
  );

  const result: TGenerateOutput =
    await renderMedia(
      renderMediaOption
    );
  inputProps?.onLog?.(
    "Rendering media... DONE"
  );

  return result;
};
